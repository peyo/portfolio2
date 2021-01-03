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
import Logo from "../../../assets/img/ProjectThumbnail/Shonk.png";

// css
import "../../../assets/css/everything.css";

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
  },
};

export default class Shonk extends Component {
  render() {
    return (
      <section className="shonk">
        <div className="shonk__container">
          <LazyLoad once offset={100}>
            <StyleRoot>
              <div className="shonk__image" style={styles.fadeInLeft}>
                <img alt="shonk logo" src={Logo} className="shonk__logo" />{" "}
              </div>
            </StyleRoot>
          </LazyLoad>
          <div className="shonk__spacing1"></div>
          <LazyLoad>
            <div className="shonk__text">
              <div className="shonk__title">Shonk</div>
              <div className="shonk__spacing"></div>
              <div className="shonk__oneLiner">
                Creating short links with unique slugs to brand, track, and share links using a
                custom domain.
              </div>
              <div className="shonk__spacing"></div>
              <div className="shonk__technologies">Full Stack</div>
              <div className="shonk__spacing"></div>
              <div className="shonk__technologies">
                Front-end: React, Apollo-Client
                <br />
                Back-end: Apollo-Server, GraphQL, Node.js, Sequelize, SQLite
                <br/>
                Deployment: Vercel, CodeSandBox
              </div>
              <div className="shonk__spacing"></div>
              <div className="shonk__button">
                <LinkContainer to="/project-page/shonk">
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
