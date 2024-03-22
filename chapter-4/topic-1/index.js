const express = require("express");
const { student, classes } = require("./models");

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static("public"));

app.get("/classes/:id", async (req, res) => {
    const { id } = req.params;

    const data = await classes.findAll({
        where: {
            id,
        },
        include: {
            model: student,
        },
    });

    res.status(200).json({
        message: "Successs",
        data,
    });
});

app.get("/students", async (req, res) => {
    const data = await student.findAll({
        include: {
            model: classes,
        },
    });

    res.status(200).json({
        message: "Successs",
        data,
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
