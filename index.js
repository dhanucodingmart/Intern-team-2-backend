const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConnect");
const bodyParser = require("body-parser");
var cors = require("cors");
const errorHandler = require("./services/errorHandlingService");
const app = express();

process.env.NODE_ENV == "production"
    ? console.log("Production Mode")
    : dotenv.config({ path: "./config/config.env" });
connectDB();

app.use(bodyParser.json());
app.use(cors());

//dist to get images, documents
// app.use('/', express.static(path.join(__dirname, 'dist')));

//routes
app.get("/", (req, res) => {
    res.send("App Is Working..Congrats...!");
});
app.use("/auth", require("./routes/auth"));

app.use(errorHandler);

app.use(function (req, res, next) {
    res.status(404).json({
        status: false,
        status_code: 404,
        message: "Not Found",
    });
});

//PORT
const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log("Running on port", PORT, "mode", process.env.NODE_ENV)
);
