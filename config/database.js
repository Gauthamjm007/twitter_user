const mongoose = require("mongoose");
const uri = require("./server.config").mongoDBKey.uri;
const setUpDb = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = setUpDb;
