import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configStore from "./store/configStore";
import { startSearchData } from "./actions/searchData";
const store = configStore();

store.dispatch(startSearchData());
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
