const express = require("express");
const app = express();
const port = 3100;
const setUpDb = require("./config/database");
const router = require("./config/router");

setUpDb();
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log("listening on port ", port);
});
