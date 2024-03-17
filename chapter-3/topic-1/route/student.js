const express = require("express");
const router = express.Router();
const studentController = require("../controller/student");

/* Add routes */
router.get("/", studentController.getStudents); // /students
router.post("/", studentController.addStudent);
router.get("/:id", studentController.getStudent); // /students/:id
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
