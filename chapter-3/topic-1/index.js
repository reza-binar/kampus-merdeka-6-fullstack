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

app.use("/", route);

/* In the end of route or after the last route */
app.use("*", (req, res) => {
    res.status(404).json({
        data: null,
        message: "Route not found",
    });
});

// Error middleware
app.use((err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";

    if (err.statusCode) {
        statusCode = err.statusCode;
    }
    if (err.message) {
        message = err.message;
    }

    res.status(statusCode).json({
        data: null,
        message,
    });
});

app.listen(port, () => {
    console.log(`Server running on ${port}!`);
});
