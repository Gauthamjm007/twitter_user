import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import tweetsReducer from "../reducers/tweetsReducer";
import searchDataReducer from "../reducers/searchDataReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      tweets: tweetsReducer,
      searchData: searchDataReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configStore;
