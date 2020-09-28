import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class WordChallenge extends Component {
  render() {
    return (
      <section className="wordChallenge__section">
        <div className="wordChallenge__container">
          <div className="wordChallenge__title">
            Challenge
          </div>
          <div className="wordChallenge__spacing1"></div>
          <div className="wordChallenge__description">
            lorem ipsum
          </div>
        </div>
      </section>
    );
  }
}
