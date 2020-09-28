import React, { Component } from "react";
import Button from "react-bootstrap-button-loader";
import { LinkContainer } from "react-router-bootstrap";
import "../../../assets/css/everything.css";

export default class Word extends Component {
  render() {
    return (
      <section className="word">
        <div className="word__container">
          <div className="word__image">
            <img
              alt="word logo"
              src="/word.svg"
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
