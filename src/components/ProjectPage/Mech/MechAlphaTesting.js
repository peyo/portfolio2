import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechAlphaTesting extends Component {
  render() {
    return (
      <section className="mechAlphaTesting__section">
        <div className="mechAlphaTesting__container">
          <div className="mechAlphaTesting__title">
            Alpha Testing Outreach
          </div>
          <div className="mechAlphaTesting__spacing1"></div>
          <div className="mechAlphaTesting__description">
            A small, highly qualitative group answered a few questions to give a starting glimpse into key insights on the value of the product and the prototype's usability. There were no major bugs and the idea resonated very well.
            <br /><br />
            <a href="https://docs.google.com/document/d/1FFmT9y2XjCcyA7QHUoy_A90yHX1fyesoGN1no4zseFk/edit"
              target="_blank"
              rel="noopener noreferrer"
            >Sample Email</a>
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScNOrcmnwE_SWkECQac-i5Zccrww3lRpex6YkFVkp52HMM4nw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >Survey Questions</a>
            <br />
            <a href="https://docs.google.com/spreadsheets/d/18xs83AtCfJekHYM9DsP4vWfcXF5goXdHHZzxqHZBucs/edit#gid=955318125"
              target="_blank"
              rel="noopener noreferrer"
            >Survey Results</a>
          </div>
        </div>
      </section>
    );
  }
}
