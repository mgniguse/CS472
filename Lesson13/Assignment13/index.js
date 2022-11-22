/**
 * index.js
 */
"use strict";
const express = require("express");
const operation = require("./operation");
const path = require("path");
const PORT = 9000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./vews"));

app.post("/submit-Form", function (req, res) {
  const first = req.body.first;
  const second = req.body.second;
  const operator = req.body.operator;
  const result = operation(first, second, operator);

  res.redirect(303, "/send-result?result=" + result);
});
app.get("/send-result", (req, res) => {
  res.send(
    `The result is ${req.query.result} <br>
        <a href="./">Another calculation</a>`
  );
});

app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});
app.post("/submit-form", function (req, res) {});
app.listen(PORT);
