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
              <li>Add more car makes.</li>
              <li>Add different DTC types. C, U, B type codes.</li>
              <li>Add solutions to DTCs.</li>
              <li>Add more car models.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
