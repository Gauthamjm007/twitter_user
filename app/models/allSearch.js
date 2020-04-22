const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allsearchSchema = new Schema({
  searches: { type: String, trim: true, unique: true },
});

const allSearch = mongoose.model("allSearch", allsearchSchema);
module.exports = allSearch;
