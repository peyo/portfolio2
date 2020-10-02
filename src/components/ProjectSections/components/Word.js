import React, { Component } from "react";

// bootstrap
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

// logo
import Logo from "../../../assets/img/ProjectThumbnail/Word.png"

// lazy image
import LazyImage from "../../../misc/LazyImage";

// css
import "../../../assets/css/everything.css";

export default class Word extends Component {
  render() {
    return (
      <section className="word">
        <div className="word__container">
          <div className="word__image">
            <LazyImage
              alt="word logo"
              src={Logo}
              className="word__logo"
            />{" "}
          </div>
          <div className="word__spacing1"></div>
          <div className="word__text">
            <div className="word__title">Word</div>
            <div className="word__shortTitle">Javascript and APIs</div>
            <div className="word__spacing"></div>
            <div className="word__oneLiner">
              Helping people understand the meaning and feeling of words so they can better perceive and communicate with the world around them.
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
