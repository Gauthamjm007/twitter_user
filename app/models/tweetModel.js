const mongoose = require("mongoose");
const Twitter = require("twitter");
const Schema = mongoose.Schema;
const twitterConfig = require("./../../config/server.config").twitterConfig;
const tweetsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tweets: [Schema.Types.Mixed],
});

tweetsSchema.pre("save", function (next) {
  const tweet = this;
  console.log("hi", tweet.name);
  if (tweet.isNew) {
    var client = new Twitter(twitterConfig);

    var params = { screen_name: tweet.name, exclude_replies: true, count: 100 };
    client.get("statuses/user_timeline", params, function (error, tweets) {
      if (!error) {
        console.log(tweets, "all tweets of user");
        const tweetData = tweets.map((twt) => {
          return {
            created_at: twt.created_at,
            id: twt.id,
            text: twt.text,
            name: twt.user.name,
            screen_name: "@".concat(twt.user.screen_name),
            img: twt.user.profile_image_url,
            retweet: twt.retweet_count,
            favorite: twt.favorite_count,
            verified: twt.verified,
          };
        });
        tweet.tweets = tweetData;
        next();
      }
    });
  } else {
    next();
  }
});

const Tweet = mongoose.model("Tweet", tweetsSchema);
module.exports = Tweet;
