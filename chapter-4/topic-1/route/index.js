const express = require("express");
const router = express.Router();
const classes = require("./class");

router.use("/classes", classes);

module.exports = router;
