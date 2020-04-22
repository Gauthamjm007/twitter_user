const mongoose = require("mongoose");
const uri = require("./server.config").mongoDBKey.uri;
const setUpDb = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = setUpDb;
