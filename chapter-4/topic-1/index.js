const express = require("express");
const router = require("./route");

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.static("public"));

app.use("/api", router);

app.listen(port, () => console.log(`Server running on port ${port}`));
