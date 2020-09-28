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
              <li>Uno</li>
              <li>Dos</li>
              <li>Tres</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
