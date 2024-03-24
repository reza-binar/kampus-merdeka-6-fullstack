const express = require("express");
const router = express.Router();

const classController = require("../controller/class");

router.route("/:id").get(classController.getClass);

module.exports = router;
