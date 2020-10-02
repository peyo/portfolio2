import React, { Component } from "react";

// bootstrap
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

// logo
import Logo from "../../../assets/img/ProjectThumbnail/Cellier.gif"

// lazy image
import LazyImage from "../../../misc/LazyImage";

// css
import "../../../assets/css/everything.css";

export default class Cellier extends Component {
  render() {
    return (
      <section className="cellier">
        <div className="cellier__container">
          <div className="cellier__image">
            <LazyImage
              alt="cellier logo"
              src={Logo}
              className="cellier__logo"
            />{" "}
          </div>
          <div className="cellier__spacing1"></div>
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
              Javascript, React, Express, Knex, Node.js, Postgres, Python
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
        </div>
      </section>
    );
  }
}