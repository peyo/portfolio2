import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechNext extends Component {
  render() {
    return (
      <section className="mechNext__section">
        <div className="mechNext__container">
          <div className="mechNext__title">
            Next
          </div>
          <div className="mechNext__spacing1"></div>
          <div className="mechNext__description">
            <ul className="mechNext__ul">
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
