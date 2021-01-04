import React, { Component } from "react";

// react router
import { Link } from "react-router-dom";

// css
import "../../../assets/css/everything.css";

export default class CellierHeader extends Component {
  render() {
    return (
      <section className="cellierFooter__footer">
        <div className="cellierFooter__container">
          <Link to="/project-page/shonk">
          <div className="cellierFooter__title">
            Next Project
          </div>
          </Link>
          <div className="cellierFooter__subtitle">
            Shonk
          </div>
        </div>
      </section>
    );
  }
}
