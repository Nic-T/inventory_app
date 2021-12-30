const express = require("express");
const router = express.Router();

router.post("/", function (req, res) {
  text = req.body.text;
  user = req.body.user;

  date = new Date();

  data = { text, user, date };
  res.send(data);
  console.log(data);
});

module.exports = router;
