import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class WordNext extends Component {
  render() {
    return (
      <section className="wordNext__section">
        <div className="wordNext__container">
          <div className="wordNext__title">
            Next
          </div>
          <div className="wordNext__spacing1"></div>
          <div className="wordNext__description">
            <ul className="wordNext__ul">
              <li>Provide a search for word feature.</li>
              <li>If the search word does not exist, provide a recommendation.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
