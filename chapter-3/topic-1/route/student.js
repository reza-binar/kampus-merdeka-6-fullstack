const express = require("express");
const router = express.Router();
const studentController = require("../controller/student");

/* Add routes */
router
    .route("/")
    .get(studentController.getStudents)
    .post(studentController.addStudent);
router
    .route("/:id")
    .get(studentController.getStudent)
    .put(studentController.updateStudent)
    .delete(studentController.deleteStudent);

module.exports = router;
