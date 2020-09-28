import React, { Component } from "react";

// bootstrap
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

// logo
import Logo from "../../../assets/img/ProjectThumbnail/Word.png"

// css
import "../../../assets/css/everything.css";

export default class Word extends Component {
  render() {
    return (
      <section className="word">
        <div className="word__container">
          <div className="word__image">
            <img
              alt="word logo"
              src={Logo}
              width="454"
              height="454"
              className="word__logo"
            />{" "}
          </div>
          <div className="word__spacing1"></div>
          <div className="word__text">
            <div className="word__title">Word</div>
            <div className="word__shortTitle">Javascript and APIs</div>
            <div className="word__spacing2"></div>
            <div className="word__technologies">Javascript</div>
            <div className="word__spacing3"></div>
            <div className="word__button">
              <LinkContainer to="/project-page/mech">
                <Button variant="outline-dark">
                  View Project
                </Button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
