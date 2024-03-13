/* 
    Importing module in backend (server) is using require, it is different to frontend that use import from 
    In this case, we use fs, to read and write file in the backend (server) side    
*/
const express = require("express");
const students = require("./data/students.json");

/* Initiate express app */
const app = express();
const port = 3000;

/* Enable request body (json) */
app.use(express.json());

/*  
    Enable static 
    It will enable the public directory can be loaded, if not loaded we can not access the index.html in the public directory
*/
app.use(express.static("public"));

/* Add routes */
app.get("/students", (req, res) => {
    const { name, city, province } = req.query;
    let data = students.map((student) => student);

    data = data.filter((student) => {
        let filteredStatus = true;
        if (name) {
            filteredStatus =
                filteredStatus &&
                student.name.toLowerCase().includes(name?.toLowerCase());
        }
        if (city) {
            filteredStatus =
                filteredStatus &&
                student.address.city
                    .toLowerCase()
                    .includes(city?.toLowerCase());
        }
        if (province) {
            filteredStatus =
                filteredStatus &&
                student.address.province
                    .toLowerCase()
                    .includes(province?.toLowerCase());
        }

        return filteredStatus;
    });

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
});

app.get("/students/:id", (req, res) => {
    const { id } = req.params;
    let data = students.map((student) => student);

    data = data.filter((student) => student.id == id);
    if (data.length == 0) {
        return res.status(404).json({
            message: `Student with id ${id} is not found!`,
            data: null,
        });
    }

    const response = {
        data: data[0],
        message: null,
    };

    res.status(200).json(response);
});

app.post("/students", (req, res) => {
    // validate the request from user
    const { name, address } = req.body;
    if (!name || name == "") {
        return res.status(400).json({
            data: null,
            message: "Name must be filled!",
        });
    }
    if (!address) {
        return res.status(400).json({
            data: null,
            message: "Address must be filled!",
        });
    }

    const { city, province } = address;
    if (!city || city == "") {
        return res.status(400).json({
            data: null,
            message: "City must be filled!",
        });
    }
    if (!province || province == "") {
        return res.status(400).json({
            data: null,
            message: "Province must be filled!",
        });
    }

    /* Process insert data */
    // get the last id and then add 1
    const lastStudent = students[students.length - 1];
    req.body = {
        id: lastStudent.id + 1,
        ...req.body,
    };

    // Insert to data student
    students.push(req.body);

    res.status(201).json({
        data: req.body,
        message: null,
    });
});

app.listen(port, () => {
    console.log(`Server running on ${port}!`);
});
