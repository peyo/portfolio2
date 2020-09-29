import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechChallenge extends Component {
  render() {
    return (
      <section className="mechChallenge__section">
        <div className="mechChallenge__container">
          <div className="mechChallenge__title">
            Challenge
          </div>
          <div className="mechChallenge__spacing1"></div>
          <div className="mechChallenge__description">
            There is no place that offers comprehensive solutions to car issues that are identified by diagnostic trouble codes, also known as DTC. A car owner or mechanic can pull a car's DTC by plugging a scanner into the OBD port. All cars have this port, even new EVs.
          </div>
        </div>
      </section>
    );
  }
}
