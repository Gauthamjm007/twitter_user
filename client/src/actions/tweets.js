import axios from "axios";

export const startGetTweets = (name) => {
  return (dispatch) => {
    axios
      .get(`/search/${name}`)
      .then((response) => {
        if (response) {
          const tweet = response.data;
          dispatch(getTweets(tweet));
        } else {
          alert("user not found");
        }
      })
      .catch((err) => {
        alert("error" + err);
      });
  };
};

export const getTweets = (res) => {
  return { type: "GET_TWEETS", payload: res.tweets };
};

export const clearTweets = () => {
  return { type: "REMOVE_TWEETS" };
};
