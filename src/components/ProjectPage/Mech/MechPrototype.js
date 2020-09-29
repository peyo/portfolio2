import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechPrototype extends Component {
  render() {
    return (
      <section className="mechPrototype__section">
        <div className="mechPrototype__container">
          <div className="mechPrototype__title">
            Prototype
          </div>
          <div className="mechPrototype__spacing1"></div>
          <div className="mechPrototype__description">
            <a href="https://github.com/peyo/project-mech">Front End Repo</a>
            <br />
            <a href="https://github.com/peyo/project-mech-api">Back End Repo</a>
            <br />
            <a href="https://github.com/peyo/dtc-and-vin-data">Database</a>
          </div>
        </div>
      </section>
    );
  }
}
