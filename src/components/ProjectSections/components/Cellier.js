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
import Logo from "../../../assets/img/ProjectThumbnail/Cellier.png"

// css
import "../../../assets/css/everything.css";

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft")
  }
}

export default class Cellier extends Component {
  render() {
    return (
      <section className="cellier">
        <div className="cellier__container">
          <LazyLoad once offset={100}>
            <StyleRoot>
              <div className="cellier__image" style={styles.fadeInLeft}>
                <img
                  alt="cellier logo"
                  src={Logo}
                  className="cellier__logo"
                />{" "}
              </div>
            </StyleRoot>
          </LazyLoad>
          <div className="cellier__spacing1"></div>
          <LazyLoad>
            <div className="cellier__text">
              <div className="cellier__title">Cellier</div>
              <div className="cellier__shortTitle">
                Full Stack Development
              </div>
              <div className="cellier__spacing"></div>
              <div className="cellier__oneLiner">
                Mapping all essential and fragrance oils of the world and helping people find and buy them. 
              </div>
              <div className="cellier__spacing"></div>
              <div className="cellier__technologies">
                Javascript, React, Express, Knex, Node.js, Postgres, Vercel, Heroku
              </div>
              <div className="cellier__spacing"></div>
              <div className="mech__button">
                <LinkContainer to="/project-page/cellier">
                  <Button variant="outline-dark">
                    View Project
                  </Button>
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