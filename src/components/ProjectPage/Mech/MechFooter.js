import React, { Component } from "react";

// bootstrap
import { LinkContainer } from "react-router-bootstrap";

// css
import "../../../assets/css/everything.css";

export default class MechHeader extends Component {
  render() {
    return (
      <section className="mechFooter__footer">
        <div className="mechFooter__container">
          <LinkContainer to="/project-page/cellier">
            <div className="mechFooter__title">
                Next Project
            </div>
          </LinkContainer>
          <div className="mechFooter__subtitle">
            Cellier
          </div>
        </div>
      </section>
    );
  }
}
