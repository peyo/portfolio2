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
            <a href="https://github.com/peyo/project-mech"
              target="_blank"
              rel="noopener noreferrer"
            >Front End Repo</a>
            <br />
            <a href="https://github.com/peyo/project-mech-api"
              target="_blank"
              rel="noopener noreferrer"
            >Back End Repo</a>
            <br />
            <a href="https://github.com/peyo/dtc-and-vin-data"
              target="_blank"
              rel="noopener noreferrer"
            >Database</a>
          </div>
        </div>
      </section>
    );
  }
}
