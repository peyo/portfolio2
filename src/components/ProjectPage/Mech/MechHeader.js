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

function MechHeader() {
  return (
    <section className="mechHeader__header">
      <NavBar />
      <StyleRoot>
        <div className="mechHeader__container" style={styles.fadeInDown}>
          <div className="mechHeader__shortDescription">
            Mech
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default MechHeader;
