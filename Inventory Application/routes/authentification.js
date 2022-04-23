const express = require("express");
const router = express.Router();

const {
  register,
  login,
  tokenRefresh,
} = require("../controllers/authentification");

router.post("/register", register);

router.post("/login", login);

router.get("/refresh_token", tokenRefresh);

module.exports = router;
