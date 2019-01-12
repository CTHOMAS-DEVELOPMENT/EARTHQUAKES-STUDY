import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import AppRouter from "./AppRouter";
import { initializeEqData } from "./crud";
import { BASE_URL_EARTHQUAKES } from "./constants";

initializeEqData(BASE_URL_EARTHQUAKES);
render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
