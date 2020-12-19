import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class ShonkPrototype extends Component {
  render() {
    return (
      <section className="shonkPrototype__section">
        <div className="shonkPrototype__container">
          <div className="shonkPrototype__title">
            Prototype
          </div>
          <div className="shonkPrototype__spacing1"></div>
          <div className="shonkPrototype__description">
            <a href="https://github.com/peyo/link-shortener-client"
              target="_blank"
              rel="noopener noreferrer"
            >Front End Repo</a>
            <br />
            <a href="https://codesandbox.io/s/rough-waterfall-yeor0"
              target="_blank"
              rel="noopener noreferrer"
            >Back End Code Base</a>
            <br />
          </div>
        </div>
      </section>
    );
  }
}
