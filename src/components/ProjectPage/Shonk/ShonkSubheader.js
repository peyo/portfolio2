import React from "react";

// animations and radium
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

// css
import "../../../assets/css/everything.css";

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft")
  }
}

function ShonkSubheader() {
  return (
    <section className="shonkSubheader__header">
      <StyleRoot>
        <div className="shonkSubheader__container" style={styles.fadeInLeft}>
          <div className="shonkSubheader__shortDescription">
            Shonk is a link management platform to brand, track, and share shortened links using a custom domain.
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default ShonkSubheader;
