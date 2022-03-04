const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3100;
let bodyParser = require("body-parser");

const productRoutes = require("./routes/products");

let db = require("./models");

app.use(bodyParser.json());
app.use(cors());

app.use("/api/products", productRoutes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
});
