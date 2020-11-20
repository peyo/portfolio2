import React, { Component } from "react";
import "../../../assets/css/everything.css";

// animations and radium
import { fadeInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";

// lazyload
import LazyLoad from "react-lazyload";

const styles = {
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight")
  }
}

export default class Line extends Component {
  render() {
    return (
      <LazyLoad once offset={100}>
        <StyleRoot>
          <section className="line">
            <div className="line__line" style={styles.fadeInRight}>
            </div>
          </section>
        </StyleRoot>
      </LazyLoad>
    );
  }
}