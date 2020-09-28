import React, { Component } from "react";

// bootstrap
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

// css
import "../../../assets/css/everything.css";

export default class Cellier extends Component {
  render() {
    return (
      <section className="cellier">
        <div className="cellier__container">
          <div className="cellier__image">
            <img
              alt="cellier logo"
              src="/cellier.svg"
              width="454"
              height="454"
              className="cellier__logo"
            />{" "}
          </div>
          <div className="cellier__spacing1"></div>
          <div className="cellier__text">
            <div className="cellier__title">Cellier</div>
            <div className="cellier__shortTitle">
              Full Stack Development
            </div>
            <div className="cellier__spacing2"></div>
            <div className="cellier__technologies">
              Javascript, React, Express, Knex, Node.js, Postgres, Python
            </div>
            <div className="cellier__spacing3"></div>
            <div className="mech__button">
              <LinkContainer to="/project-page/cellier">
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