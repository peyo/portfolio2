import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class SpinventoryPrototype extends Component {
  render() {
    return (
      <section className="spinventoryPrototype__section">
        <div className="spinventoryPrototype__container">
          <div className="spinventoryPrototype__title">
            Prototype
          </div>
          <div className="spinventoryPrototype__spacing1"></div>
          <div className="spinventoryPrototype__description">
            <a href="https://github.com/peyo/spinventory"
              target="_blank"
              rel="noopener noreferrer"
            >Repo</a>
            <br />
            <a href="https://spinventory-25db0.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >Test Site</a>
          </div>
        </div>
      </section>
    );
  }
}
