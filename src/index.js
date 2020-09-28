import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// scroll to top
import ScrollToTop from "./misc/ScrollToTop"

// animated cursor
import AnimatedCursor from "react-animated-cursor"

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <AnimatedCursor />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
