import React, { Component } from "react";

// bootstrap
import { LinkContainer } from "react-router-bootstrap";

// css
import "../../../assets/css/everything.css";

export default class CellierHeader extends Component {
  render() {
    return (
      <section className="cellierFooter__footer">
        <div className="cellierFooter__container">
          <LinkContainer to="/project-page/word">
          <div className="cellierFooter__title">
            Next Project
          </div>
          </LinkContainer>
          <div className="cellierFooter__subtitle">
            Word
          </div>
        </div>
      </section>
    );
  }
}
