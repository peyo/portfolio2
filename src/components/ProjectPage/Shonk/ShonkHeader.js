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

function ShonkHeader() {
  return (
    <section className="shonkHeader__header">
      <NavBar />
      <StyleRoot>
        <div className="shonkHeader__container" style={styles.fadeInDown}>
          <div className="shonkHeader__shortDescription">
            SHONK
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default ShonkHeader;
