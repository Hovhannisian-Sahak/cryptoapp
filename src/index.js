import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";
import "antd/dist/reset.css";

const el = document.getElementById("root");
const root = createRoot(el);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
