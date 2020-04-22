const express = require("express");
const app = express();
const port = 3100;
const setUpDb = require("./config/database");
const router = require("./config/router");

setUpDb();
app.use(express.json());
app.use("/", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("listening on port ", port);
});
