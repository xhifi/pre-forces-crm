require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());
app.use(require("cors")());

app.use("/api/alpha/s", require("./routes/studentsRoute")); // Students routes

app.use(require("./middlewares/ErrorHandler.js")); //Error Boundary Middleware
app.use(require("./middlewares/FourOhFour")); //404 Middleware

require("./utils/initServer")(app, process.env.APPLICATION_PORT);
