import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class CellierInitialBrainstorm extends Component {
  render() {
    return (
      <section className="cellierInitialBrainstorm__section">
        <div className="cellierInitialBrainstorm__container">
          <div className="cellierInitialBrainstorm__title">
            Initial Brainstorm
          </div>
          <div className="cellierInitialBrainstorm__spacing1"></div>
          <div className="cellierInitialBrainstorm__description">
            These were some of the considered questions during this step. Should CASRN, IFRA certificates, weight, and cost be included in the MVP? The MVP will include only key information. What is the key information? A select group of oils, links to the sources to those oils, a few oils that blend well with the initial oil selection, and descriptions of the oils. What are some key features? The ability to rate the oil. The ability to leave a comment about the oil and source.
            <br /><br />
            <a
              href="https://docs.google.com/document/d/1njvBazLe0AC_YYxRR01HODoLpFSI-USvFKcWE_mlmgY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >More Info</a>
          </div>
        </div>
      </section>
    );
  }
}
