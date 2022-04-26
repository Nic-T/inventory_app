const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
let bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 3100;

const productRoutes = require("./routes/products");
const authRoutes = require("./routes/authentification");

let db = require("./models");

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);
app.use("/api/authentification", authRoutes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
