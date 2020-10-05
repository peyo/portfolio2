import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechInitialBrainstorm extends Component {
  render() {
    return (
      <section className="mechInitialBrainstorm__section">
        <div className="mechInitialBrainstorm__container">
          <div className="mechInitialBrainstorm__title">
            Initial Brainstorm
          </div>
          <div className="mechInitialBrainstorm__spacing1"></div>
          <div className="mechInitialBrainstorm__description">
            These were some of the considered questions during this step. What DTC codes should we start with? There are hundreds of thousands to choose from. What is the best way to streamline the product for people? Create a simple search function and organize the site by DTC. Will users have more than one car? Create a database table where a single user can store multiple cars. How will people comment based on a DTC code? Organize each page by DTC.
            <br /><br />
            <a href="https://docs.google.com/document/d/1Vhp3TW06YH2uy_yhnNbPlbegSpkParbjYqkcSQeBQG0/edit"
              target="_blank"
              rel="noopener noreferrer"
            >More Info</a>
          </div>
        </div>
      </section>
    );
  }
}
