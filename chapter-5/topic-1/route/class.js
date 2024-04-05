const express = require("express");
const router = express.Router();
const classController = require("../controller/class");
const { authMiddleware } = require("../middleware/auth");

router
    .route("/")
    .get(authMiddleware(["user", "admin"]), classController.getClasses)
    .post(authMiddleware(["admin"]), classController.createClass);

router
    .route("/:id")
    .get(authMiddleware(["user", "admin"]), classController.getClass)
    .put(authMiddleware(["admin"]), classController.updateClass)
    .delete(authMiddleware(["admin"]), classController.deleteClass);

module.exports = router;
