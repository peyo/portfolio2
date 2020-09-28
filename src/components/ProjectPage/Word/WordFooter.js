import React, { Component } from "react";

// bootstrap
import { LinkContainer } from "react-router-bootstrap";

// css
import "../../../assets/css/everything.css";

export default class WordHeader extends Component {
  render() {
    return (
      <section className="wordFooter__footer">
        <div className="wordFooter__container">
          <LinkContainer to="/project-page/mech">
            <div className="wordFooter__title">
                Next Project
            </div>
          </LinkContainer>
          <div className="wordFooter__subtitle">
            Mech
          </div>
        </div>
      </section>
    );
  }
}
