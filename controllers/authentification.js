const { sequelize, User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtTokens = require("../utils/jwt-helper");

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      email: email,
      password: encryptedPassword,
    });

    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.json("error");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username: username } });
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      let tokens = jwtTokens(user);
      res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true });
      res.json(tokens.accessToken);
    }
  } catch (err) {
    console.error(err);
    res.json("error");
  }
};

const tokenRefresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken === null)
      return res.status(401).json({ error: "Null refresh token" });
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, user) => {
        if (error) return res.status(403).json({ error: error.message });
        let tokens = jwtTokens(user);
        res.cookie("refreshToken", tokens.refreshToken, { httpOnly: true });
        res.json(tokens.accessToken);
      }
    );
    res.json(refreshToken, accessToken);
  } catch (err) {
    console.error(err);
    res.json("error");
  }
};

module.exports = {
  register,
  login,
  tokenRefresh,
};
