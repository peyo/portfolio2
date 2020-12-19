import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class ShonkChallenge extends Component {
  render() {
    return (
      <section className="shonkChallenge__section">
        <div className="shonkChallenge__container">
          <div className="shonkChallenge__title">
            Challenge
          </div>
          <div className="shonkChallenge__spacing1"></div>
          <div className="shonkChallenge__description">
            Create a link shortener application. The goal was to build a full-stack React web app to write data through a GraphQL back-end. Once a user created data through a form, the inputted information would appear in a list below the form. I also applied a mobile-first responsive layout and styling using Material UI.

            Non-requirements: I did not expect a fully working URL shortener. For example, it was not required for a working redirect when clicking on a shortened URL.
          </div>
        </div>
      </section>
    );
  }
}
