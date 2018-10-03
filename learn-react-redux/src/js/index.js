import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";
import { addArticle } from "../js/actions/actions";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => console.log('Look ma, Redux!!'));
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );