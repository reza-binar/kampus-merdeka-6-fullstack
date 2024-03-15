/* 
    Importing module in backend (server) is using require, it is different to frontend that use import from 
    In this case, we use fs, to read and write file in the backend (server) side    
*/
const express = require("express");
const students = require("./data/students.json");
const route = require("./route");

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

// "/"
app.use("/", route);

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

/* Mini Challenge: API to Update (PUT the Data) */
app.put("/students/:id", (req, res) => {
    // validate the request from user
    const { name, address } = req.body;
    if (!name || name == "") {
        return res.status(400).json({
            data: null,
            message: "Name must be filled!",
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

    const id = parseInt(req?.params?.id);
    const updatedStudent = {
        id: id,
        ...req.body,
    };

    // Update the data by id
    students.map((student, index) => {
        if (student?.id == id) {
            students[index] = updatedStudent;
        }
    });

    res.status(200).json({
        data: updatedStudent,
        message: null,
    });
});

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req?.params?.id);

    // Mini Challenge: Delete here, you can do with filter or for or another method
    index = students.findIndex((student) => student.id === id);
    students.splice(index, 1);

    // Response
    res.status(200).json({
        data: null,
        message: "Success",
    });
});

app.listen(port, () => {
    console.log(`Server running on ${port}!`);
});
