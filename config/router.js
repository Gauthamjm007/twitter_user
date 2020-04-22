const express = require("express");
const router = express.Router();
const tweetController = require("../app/controllers/tweetController");
const searchController = require("../app/controllers/searchController");

router.get("/search/:name", tweetController.show);
router.get("/allsearch", searchController.results);

module.exports = router;
