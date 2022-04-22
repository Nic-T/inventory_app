const { sequelize, User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    res.json("error");
  }
};

module.exports = {
  register,
  login,
};
