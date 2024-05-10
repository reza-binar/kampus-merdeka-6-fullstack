const express = require("express");
const router = express.Router();
const messageController = require("../controller/message");

router
    .route("/")
    .get(messageController.getMessages)
    .post(messageController.createMessage);

module.exports = router;
