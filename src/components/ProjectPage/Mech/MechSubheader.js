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

function MechSubheader() {
  return (
    <section className="mechSubheader__header">
      <StyleRoot>
        <div className="mechSubheader__container" style={styles.fadeInLeft}>
          <div className="mechSubheader__shortDescription">
            Mech is a community for car owners where users can register an
            account, save their car make and model, and search diagnostic trouble
            codes (DTC). After performing the DTC search, users can chat
            Reddit-style with other car owners for potential solutions.
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default MechSubheader;
