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

function WordSubheader() {
  return (
    <section className="wordSubheader__header">
      <StyleRoot>
        <div className="wordSubheader__container" style={styles.fadeInLeft}>
          <div className="wordSubheader__shortDescription">
            Word helps users acquire a better understanding and feeling of words
            through a sentiment score using definitions, poems, lyrics, and
            videos.
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default WordSubheader;
