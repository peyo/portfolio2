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
            Cellier
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default CellierHeader;
