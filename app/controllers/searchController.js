const allSearch = require("../models/allSearch");

module.exports.results = (req, res) => {
  allSearch
    .find()
    .then((searches) => {
      res.json(searches);
    })
    .catch((err) => {
      res.json(err);
    });
};
