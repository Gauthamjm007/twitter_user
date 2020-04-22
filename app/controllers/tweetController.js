const Tweet = require("../models/tweetModel");
const allSearch = require("../models/allSearch");

module.exports.show = (req, res) => {
  const name = req.params.name;

  const allsearch = new allSearch({ searches: name });
  allsearch
    .save()
    .then((srh) => {
      console.log(srh, "result saved");
    })
    .catch((err) => {
      console.log(err);
    });
  Tweet.findOne({ name })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        const tweet = new Tweet({ name: name });
        tweet
          .save()
          .then((tweet) => {
            res.json(tweet);
          })
          .catch((err) => {
            res.json(err);
          });
      }
    })
    .catch((err) => {
      res.json(err);
    });
};
