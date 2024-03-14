const express = require("express");
const router = express.Router();
const studentRoute = require("./student");

router.use("/students", studentRoute);

module.exports = router;
