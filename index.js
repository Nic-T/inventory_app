const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
let bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var path = require("path");
const multer = require("multer");

const app = express();

const port = process.env.PORT || 3100;

const productRoutes = require("./routes/products");
const authRoutes = require("./routes/authentification");

let db = require("./models");

let corsOptions = {
  origin: "http://localhost:3000",
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("*/img", express.static(path.join(__dirname, "public/images")));

app.use("/api/products", productRoutes);
app.use("/api/authentification", authRoutes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
