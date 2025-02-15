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

function SpinventorySubheader() {
  return (
    <section className="spinventorySubheader__header">
      <StyleRoot>
        <div className="spinventorySubheader__container" style={styles.fadeInLeft}>
          <div className="spinventorySubheader__shortDescription">
          Spinventory is a role-based inventory management system that streamlines the process 
          of counting, tracking, and analyzing inventory data through an intuitive interface with real-time updates and automated reporting features.
          </div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default SpinventorySubheader;
