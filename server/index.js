require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());
app.use(require("cors")());

app.use("/api/alpha/s", require("./routes/studentsRoute"));

require("./utils/initServer")(app, process.env.APPLICATION_PORT);
