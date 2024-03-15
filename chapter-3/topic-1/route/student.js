const express = require("express");
const router = express.Router();
const studentController = require("../controller/student");

/* Add routes */
router.get("/", studentController.getStudents); // /students
router.get("/:id", studentController.getStudent); // /students/:id

module.exports = router;
