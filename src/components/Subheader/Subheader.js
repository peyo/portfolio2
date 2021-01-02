import React from "react";

// animations and radium
import { fadeInDown } from "react-animations";
import Radium, {StyleRoot} from "radium";

// css
import "../../assets/css/everything.css";

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown")
  }
}

function Subheader() {
  return (
    <section className="subheader__header">
      <StyleRoot>
        <div className="subheader__container" style={styles.fadeInLeft}>
          <div className="subheader__shortBio">
            I believe curiosity and openness, paired with self-discipline and
            diligence, lead to great outcomes.
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default Subheader;