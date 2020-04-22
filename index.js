const express = require("express");
const app = express();
const port = process.env.PORT || 3100;
const setUpDb = require("./config/database");
const router = require("./config/router");
const path = require("path");

setUpDb();
app.use(express.json());
app.use("/", router);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
