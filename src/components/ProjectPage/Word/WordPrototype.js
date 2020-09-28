import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class WordPrototype extends Component {
  render() {
    return (
      <section className="wordPrototype__section">
        <div className="wordPrototype__container">
          <div className="wordPrototype__title">
            Prototype
          </div>
          <div className="wordPrototype__spacing1"></div>
          <div className="wordPrototype__description">
            lorem ipsum
          </div>
        </div>
      </section>
    );
  }
}
