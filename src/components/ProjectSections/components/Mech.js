import React, { Component } from "react";

// bootstrap
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

// css
import "../../../assets/css/everything.css";

export default class Mech extends Component {
  render() {
    return (
      <section className="mech">
        <div className="mech__container">
          <div className="mech__image">
            <img
              alt="mech logo"
              src="/mech.svg"
              width="454"
              height="454"
              className="mech__logo"
            />{" "}
          </div>
          <div className="mech__spacing1"></div>
          <div className="mech__text">
            <div className="mech__title">Mech</div>
            <div className="mech__shortTitle">
              Full Stack Development
            </div>
            <div className="mech__spacing2"></div>
            <div className="mech__technologies">
              Javascript, React, Express, Knex, Node.js, Postgres, Python
            </div>
            <div className="mech__spacing3"></div>
            <div className="mech__button">
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