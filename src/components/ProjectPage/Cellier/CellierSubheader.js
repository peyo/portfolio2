import React from "react";

// animations and radium
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

// css
import "../../../assets/css/everything.css";

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
};

function CellierSubheader() {
  return (
    <section className="cellierSubheader__header">
      <StyleRoot>
        <div className="cellierSubheader__container" style={styles.fadeInLeft}>
          <div className="cellierSubheader__shortDescription">
            Cellier is a search tool that helps people find different
            distributors of essential oils, fragrance oils, absolutes, and
            waxes. It will also recommend oils that mix well with others based
            on a fragrance wheel.
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default CellierSubheader;
