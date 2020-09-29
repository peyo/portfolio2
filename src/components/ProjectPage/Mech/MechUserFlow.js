import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechUserFlow extends Component {
  render() {
    return (
      <section className="mechUserFlow__section">
        <div className="mechUserFlow__container">
          <div className="mechUserFlow__title">
            User Stories & Flow
          </div>
          <div className="mechUserFlow__spacing1"></div>
          <div className="mechUserFlow__description">
            <a href="https://docs.google.com/spreadsheets/d/1Qu8svp9Rg_DDMLtK0EBDGHKtYutcIVbFRwc5YDrau-M/edit?usp=sharing">User Stories</a>
            <br />
            <a href="https://drive.google.com/file/d/1wd61rWYoOmzd0s1s8Wqs9pCD2kOszChx/view?usp=sharing">User Flow</a>
          </div>
        </div>
      </section>
    );
  }
}
