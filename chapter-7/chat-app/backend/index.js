const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const router = require("./route");

const PORT = process.env.PORT || 4000;

const app = express();
const httpServer = createServer(app);
const options = {
    cors: {
        origin: "*",
        methods: "*",
    },
};
const io = new Server(httpServer, options);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Using socket.io to the request
app.use(async function (req, res, next) {
    req.io = io;
    next();
});

app.use("/api/v1", router);

/* In the end of route or after the last route */
app.use("*", (req, res) => {
    res.status(404).json({
        data: null,
        message: "Route not found",
    });
});

// Error middleware
app.use((err, req, res, next) => {
    let statusCode = 500;
    let message = "Internal Server Error";

    if (err.statusCode) {
        statusCode = err.statusCode;
    }
    if (err.message) {
        message = err.message;
    }

    res.status(statusCode).json({
        data: null,
        message,
    });
});

io.on("connection", (socket) => {
    console.log(socket.id + " connected!");

    /* ... */
    socket.on("disconnect", (reason) => {
        console.log(socket.id + " disconnected because " + reason);
    });

    socket.on("typing", () => {
        io.emit("ontyping");
    });
});

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
