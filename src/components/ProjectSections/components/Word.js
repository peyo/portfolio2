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
import Logo from "../../../assets/img/ProjectThumbnail/Word.png"

// css
import "../../../assets/css/everything.css";

const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInLeft, "fadeInLeft")
  }
}

export default class Word extends Component {
  render() {
    return (
      <section className="word">
        <div className="word__container">
          <LazyLoad once offset={100}>
            <StyleRoot>
              <div className="word__image" style={styles.fadeInLeft}>
                <img
                  alt="word logo"
                  src={Logo}
                  className="word__logo"
                />{" "}
              </div>
            </StyleRoot>
          </LazyLoad>
          <div className="word__spacing1"></div>
          <div className="word__text">
            <div className="word__title">Word</div>
            <div className="word__shortTitle">Javascript and APIs</div>
            <div className="word__spacing"></div>
            <div className="word__oneLiner">
              Helping people understand the meaning and feeling of words to better perceive and communicate with the world around them.
            </div>
            <div className="word__spacing"></div>
            <div className="word__technologies">Javascript</div>
            <div className="word__spacing"></div>
            <div className="word__button">
              <LinkContainer to="/project-page/word">
                <Button variant="outline-dark">
                  View Project
                </Button>
              </LinkContainer>
            <div className="word__spacing"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
