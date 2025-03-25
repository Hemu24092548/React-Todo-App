import React from "react";
import ReactDOM from "react-dom/client";  // Use createRoot from React 18
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
