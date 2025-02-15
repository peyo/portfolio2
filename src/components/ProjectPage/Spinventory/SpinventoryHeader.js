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

function SpinventoryHeader() {
  return (
    <section className="spinventoryHeader__header">
      <NavBar />
      <StyleRoot>
        <div className="spinventoryHeader__container" style={styles.fadeInDown}>
          <div className="spinventoryHeader__shortDescription">
            SPINVENTORY
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default SpinventoryHeader;
