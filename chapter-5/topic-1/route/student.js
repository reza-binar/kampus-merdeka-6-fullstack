const express = require("express");
const router = express.Router();
const studentController = require("../controller/student");
const { authMiddleware } = require("../middleware/auth");

router
    .route("/")
    .get(authMiddleware(["user", "admin"]), studentController.getStudents)
    .post(authMiddleware(["admin"]), studentController.createStudent);

router
    .route("/:id")
    .get(authMiddleware(["user", "admin"]), studentController.getStudent)
    .put(authMiddleware(["admin"]), studentController.updateStudent)
    .delete(authMiddleware(["admin"]), studentController.deleteStudent);

module.exports = router;
