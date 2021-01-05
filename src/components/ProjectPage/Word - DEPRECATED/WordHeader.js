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

function WordHeader() {
  return (
    <section className="wordHeader__header">
      <NavBar />
      <StyleRoot>
        <div className="wordHeader__container" style={styles.fadeInDown}>
          <div className="wordHeader__shortDescription">
            Word
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default WordHeader;
