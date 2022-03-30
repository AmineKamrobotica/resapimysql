require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const robotRouter = require("./api/robots/router/robot.router");

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-www-form-urlencoded,Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use("/api2/users", userRouter);
app.use("/api2/robots", robotRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
