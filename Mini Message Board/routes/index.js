const { json } = require("express");
const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", function (req, res) {
  fs.readFile("messages.json", function (err, data) {
    if (err) {
      console.log(err);
    }
    data = JSON.parse(data);
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
