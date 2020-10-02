import React, { Component } from "react";

// bootstrap
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

// logo
import Logo from "../../../assets/img/ProjectThumbnail/Mech.png"

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
              src={Logo}
              className="mech__logo"
            />{" "}
          </div>
          <div className="mech__spacing1"></div>
          <div className="mech__text">
            <div className="mech__title">Mech</div>
            <div className="mech__shortTitle">
              Full Stack Development
            </div>
            <div className="mech__spacing"></div>
            <div className="mech__oneLiner">
              Organizing all car trouble codes and making it universally accessible, human, and useful.
            </div>
            <div className="mech__spacing"></div>
            <div className="mech__technologies">
              Javascript, React, Express, Knex, Node.js, Postgres, Python
            </div>
            <div className="mech__spacing"></div>
            <div className="mech__button">
              <LinkContainer to="/project-page/mech">
                <Button variant="outline-dark">
                  View Project
                </Button>
              </LinkContainer>
            <div className="mech__spacing"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}