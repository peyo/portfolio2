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
    <AnimatedCursor
      innerSize={9}
      outerSize={9}
      color='193, 11, 111'
      outerAlpha={0.3}
      innerScale={0.6}
      outerScale={5}
    />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
