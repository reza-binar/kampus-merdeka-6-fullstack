const express = require("express");
const router = express.Router();

const studentController = require("../controller/student");

router
    .route("/")
    .get(studentController.getStudents)
    .post(studentController.createStudent);

router
    .route("/:id")
    .get(studentController.getStudent)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent);

module.exports = router;
