const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB Connection Success`);
  })
  .catch((err) => {
    console.log(err);
  });
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Welcome");
});
