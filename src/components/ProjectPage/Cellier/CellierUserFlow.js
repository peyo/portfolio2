import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class CellierUserFlow extends Component {
  render() {
    return (
      <section className="cellierUserFlow__section">
        <div className="cellierUserFlow__container">
          <div className="cellierUserFlow__title">
            User Stories & Flow
          </div>
          <div className="cellierUserFlow__spacing1"></div>
          <div className="cellierUserFlow__description">
            <a href="https://docs.google.com/spreadsheets/d/1Prp5_Vqwj3Mq-tDMXY1vQbNY91Wn166Oml-4lCk_Aok/edit?usp=sharing">User Stories</a>
            <br />
            <a href="https://docs.google.com/spreadsheets/d/1Gpt9Ec49X17cLvJ85KVWArYBeMeDkp2c3zobHpDaw4Y/edit?usp=sharing">User Flow</a>
          </div>
        </div>
      </section>
    );
  }
}
