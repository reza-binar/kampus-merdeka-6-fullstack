const express = require("express");
const router = express.Router();
const message = require("./message");

router.use("/messages", message);

module.exports = router;
