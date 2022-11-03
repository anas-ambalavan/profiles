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

app.get("/", (req, res) => {
  res.json({ result: "Success" });
});

app.listen(3000, () => {
  console.log("Welcome");
});
