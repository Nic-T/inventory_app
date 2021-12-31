const express = require("express");
const router = express.Router();
const fs = require("fs");
const { type } = require("os");

router.post("/", function (req, res) {
  oldData = fs.readFileSync("messages.json");
  oldData = JSON.parse(oldData);

  text = req.body.text;
  user = req.body.user;

  date = new Date();

  data = { text, user, date };

  oldData.push(data);

  oldData = JSON.stringify(oldData);

  fs.writeFileSync("messages.json", oldData, "utf8");

  res.send(data);
});

module.exports = router;
