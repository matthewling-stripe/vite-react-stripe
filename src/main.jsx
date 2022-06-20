import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";

const container = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);

