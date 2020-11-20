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
            Word helps users acquire a better understanding and feeling of words
            through a sentiment score using definitions, poems, lyrics, and
            videos.
          </div>
          <div className="wordHeader__spacing1"></div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default WordHeader;
