import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class CellierPrototype extends Component {
  render() {
    return (
      <section className="cellierPrototype__section">
        <div className="cellierPrototype__container">
          <div className="cellierPrototype__title">
            Prototype
          </div>
          <div className="cellierPrototype__spacing1"></div>
          <div className="cellierPrototype__description">
            <a href="https://github.com/peyo/project-cellier"
              target="_blank"
              rel="noopener noreferrer"
            >Front End Repo</a>
            <br />
            <a href="https://github.com/peyo/project-cellier-api"
              target="_blank"
              rel="noopener noreferrer"
            >Back End Repo</a>
            <br />
            <a href="https://docs.google.com/spreadsheets/d/1g4HVTzNwAJECc522jGIH4EnCMA98Tr2kGJfueCO4paQ/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >Database and Tables Structure</a>
          </div>
        </div>
      </section>
    );
  }
}
