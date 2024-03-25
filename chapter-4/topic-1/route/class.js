const express = require("express");
const router = express.Router();

const classController = require("../controller/class");

router
    .route("/")
    .get(classController.getClasses)
    .post(classController.createClass);

router
    .route("/:id")
    .get(classController.getClass)
    .put(classController.updateClass)
    .delete(classController.deleteClass);

module.exports = router;
