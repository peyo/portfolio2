import React from "react";

// animations and radium
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

// navbar
import NavBar from "../../NavBar/NavBar";

// css
import "../../../assets/css/everything.css";

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown")
  }
}

function CellierHeader() {
  return (
    <section className="cellierHeader__header">
      <NavBar />
      <StyleRoot>
        <div className="cellierHeader__container" style={styles.fadeInDown}>
          <div className="cellierHeader__shortDescription">
            Cellier is a search tool that helps people find different distributors
            of essential oils, fragrance oils, absolutes, and waxes. It will also
            recommend oils that mix well with others based on a fragrance wheel.
          </div>
          <div className="cellierHeader__spacing1"></div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default CellierHeader;
