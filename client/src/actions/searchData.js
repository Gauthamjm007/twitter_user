import axios from "axios";

export const startSearchData = (name) => {
  return (dispatch) => {
    axios
      .get(`/allsearch`)
      .then((tweets) => {
        if (tweets) {
          dispatch(getSearchData(tweets.data));
        } else {
          alert("tweets not found");
        }
      })
      .catch((err) => {
        alert("error" + err);
      });
  };
};

export const getSearchData = (tweets) => {
  return { type: "GET_SEARCHES", payload: tweets };
};

export const clearSearchDatas = () => {
  return { type: "REMOVE_SEARCHES" };
};
