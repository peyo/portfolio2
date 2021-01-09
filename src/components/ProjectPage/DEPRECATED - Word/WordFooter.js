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
          <Link to="/project-page/shonk">
            <div className="wordFooter__title">
                Next Project
            </div>
          </Link>
          <div className="wordFooter__subtitle">
            Shonk
          </div>
        </div>
      </section>
    );
  }
}
