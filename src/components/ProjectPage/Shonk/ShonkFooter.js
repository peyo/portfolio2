import React, { Component } from "react";

// react router
import { Link } from "react-router-dom";

// css
import "../../../assets/css/everything.css";

export default class ShonkHeader extends Component {
  render() {
    return (
      <section className="shonkFooter__footer">
        <div className="shonkFooter__container">
          <Link to="/project-page/mech">
          <div className="shonkFooter__title">
            Next Project
          </div>
          </Link>
          <div className="shonkFooter__subtitle">
            Mech
          </div>
        </div>
      </section>
    );
  }
}
