const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtTokens({ id, username, password, role }) {
  const user = { id, username, password, role };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken, username };
}

module.exports = jwtTokens;
