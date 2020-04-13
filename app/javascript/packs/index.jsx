import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../src/js/store/index";
import App from "../src/js/components/App";


document.addEventListener('DOMContentLoaded', () => {
 render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
})