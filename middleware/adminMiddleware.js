const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminMiddleware = (req, res, next) => {
  const adminHeader = req.headers["authorization"];
  if (!adminHeader) return res.sendStatus(401);

  token = adminHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    if (user.role != "admin") {
      return res.sendStatus(403);
    }
  });

  next();
};

module.exports = adminMiddleware;
