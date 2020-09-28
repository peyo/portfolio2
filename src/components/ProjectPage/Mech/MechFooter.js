import React, { Component } from "react";

// react router
import { Link } from "react-router-dom";

// css
import "../../../assets/css/everything.css";

export default class MechHeader extends Component {
  render() {
    return (
      <section className="mechFooter__footer">
        <div className="mechFooter__container">
          <Link to="/project-page/cellier">
            <div className="mechFooter__title">
                Next Project
            </div>
          </Link>
          <div className="mechFooter__subtitle">
            Cellier
          </div>
        </div>
      </section>
    );
  }
}
