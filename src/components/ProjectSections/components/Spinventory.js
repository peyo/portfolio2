import React, { Component } from "react";

// animations and radium
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

// bootstrap
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

// lazyload
import LazyLoad from "react-lazyload";

// logo
import Logo from "../../../assets/img/ProjectThumbnail/Spinventory.png"

// css
import "../../../assets/css/everything.css";

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft")
  }
}

export default class Spinventory extends Component {
  render() {
    return (
      <section className="spinventory">
        <div className="spinventory__container">
          <LazyLoad once offset={100}>
            <StyleRoot>
              <div className="spinventory__image" style={styles.fadeInLeft}>
                <img alt="spinventory logo" src={Logo} className="spinventory__logo" />{" "}
              </div>
            </StyleRoot>
          </LazyLoad>
          <div className="spinventory__spacing1"></div>
          <LazyLoad>
            <div className="spinventory__text">
              <div className="spinventory__title">Spinventory</div>
              <div className="spinventory__spacing"></div>
              <div className="spinventory__oneLiner">
              A role-based inventory management system that simplifies counting and reporting for businesses.
              </div>
              <div className="spinventory__spacing"></div>
              <div className="spinventory__technologies">Full Stack</div>
              <div className="spinventory__spacing"></div>
              <div className="spinventory__technologies">
                Front-end: React, Material-UI
                <br />
                Back-end: Express.js, Node.js
                <br />
                Database: Firebase Realtime Database
                <br />
                Authentication: Firebase Auth
              </div>
              <div className="spinventory__spacing"></div>
              <div className="spinventory__button">
                <LinkContainer to="/project-page/spinventory">
                  <Button variant="outline-dark">View Project</Button>
                </LinkContainer>
              </div>
            </div>
          </LazyLoad>
        </div>
      </section>
    );
  }
}