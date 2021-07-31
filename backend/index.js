const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./startups/db");
const admin = require("./routes/admins");
const ExpressError = require("./utilities/expressError");

db.connectToDatabase();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});

app.use("/api/admins", admin);

app.use("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).json(message);
});
