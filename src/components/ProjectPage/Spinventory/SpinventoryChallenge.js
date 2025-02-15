import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class SpinventoryChallenge extends Component {
  render() {
    return (
      <section className="spinventoryChallenge__section">
        <div className="spinventoryChallenge__container">
          <div className="spinventoryChallenge__title">
            Challenge
          </div>
          <div className="spinventoryChallenge__spacing1"></div>
          <div className="spinventoryChallenge__description">
          Spinventory transforms a labor-intensive, error-prone paper process into a streamlined digital solution. By eliminating manual data entry, reducing errors, and automating report generation, it saves significant time and improves data accuracy. The role-based system ensures that counters can easily input data while accountants can efficiently access and analyze it, creating a more reliable and efficient inventory management process for record stores.
          </div>
        </div>
      </section>
    );
  }
}
