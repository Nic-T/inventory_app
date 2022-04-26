const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtTokens({ id, username, password }) {
  const user = { id, username, password };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
}

module.exports = jwtTokens;
