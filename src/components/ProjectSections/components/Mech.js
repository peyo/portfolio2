import React, { Component } from "react";

// animations and radium
import { fadeInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

// bootstrap
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

// lazyload
import LazyLoad from "react-lazyload";

// logo
import Logo from "../../../assets/img/ProjectThumbnail/Mech.png";

// css
import "../../../assets/css/everything.css";

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
};

export default class Mech extends Component {
  render() {
    return (
      <section className="mech">
        <div className="mech__container">
          <LazyLoad once offset={100}>
            <StyleRoot>
              <div className="mech__image" style={styles.fadeInLeft}>
                <img alt="mech logo" src={Logo} className="mech__logo" />{" "}
              </div>
            </StyleRoot>
          </LazyLoad>
          <div className="mech__spacing1"></div>
          <LazyLoad>
            <div className="mech__text">
              <div className="mech__title">Mech</div>
              <div className="mech__shortTitle">Full Stack Development</div>
              <div className="mech__spacing"></div>
              <div className="mech__oneLiner">
                Organizing all car trouble codes and making it universally
                accessible, human, and useful.
              </div>
              <div className="mech__spacing"></div>
              <div className="mech__technologies">
                Javascript, React, Express, Knex, Node.js, Postgres, Python
              </div>
              <div className="mech__spacing"></div>
              <div className="mech__button">
                <LinkContainer to="/project-page/mech">
                  <Button variant="outline-dark">View Project</Button>
                </LinkContainer>
                <div className="mech__spacing"></div>
              </div>
            </div>
          </LazyLoad>
        </div>
      </section>
    );
  }
}
