const express = require("express");
const bp = require("body-parser");

const basicRoute = require("./routes/index");
const newRoute = require("./routes/newMessage");

const app = express();
const port = process.env.PORT || 3000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use("/", basicRoute);
app.use("/new", newRoute);

app.listen(port, () => {
  `App listening on port ${port}`;
});
