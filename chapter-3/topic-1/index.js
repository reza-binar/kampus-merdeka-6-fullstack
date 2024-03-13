/* 
    Importing module in backend (server) is using require, it is different to frontend that use import from 
    In this case, we use fs, to read and write file in the backend (server) side    
*/
const express = require("express");
const students = require("./data/students.json");

/* Initiate express app */
const app = express();
const port = 3000;

/*  
    Enable static 
    It will enable the public directory can be loaded, if not loaded we can not access the index.html in the public directory
*/
app.use(express.static("public"));

/* Add routes */
app.get("/students", (req, res) => {
    const { name, city, province } = req.query;
    let data = students.map((student) => student);

    data = data.filter(
        (student) =>
            student.name.toLowerCase().includes(name.toLowerCase()) &&
            student.address.city.toLowerCase().includes(city.toLowerCase()) &&
            student.address.province
                .toLowerCase()
                .includes(province.toLowerCase())
    );

    res.status(200).json(data);
});

app.listen(port, () => {
    console.log(`Server running on ${port}!`);
});
