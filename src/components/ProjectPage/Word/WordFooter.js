import React, { Component } from "react";

// react router
import { Link } from "react-router-dom";

// css
import "../../../assets/css/everything.css";

export default class WordHeader extends Component {
  render() {
    return (
      <section className="wordFooter__footer">
        <div className="wordFooter__container">
          <Link to="/project-page/mech">
            <div className="wordFooter__title">
                Next Project
            </div>
          </Link>
          <div className="wordFooter__subtitle">
            Mech
          </div>
        </div>
      </section>
    );
  }
}
