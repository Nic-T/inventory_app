const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
let bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3100;

const productRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

let db = require("./models");

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
