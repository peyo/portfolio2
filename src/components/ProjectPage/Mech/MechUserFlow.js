import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechUserFlow extends Component {
  render() {
    return (
      <section className="mechUserFlow__section">
        <div className="mechUserFlow__container">
          <div className="mechUserFlow__title">
            User Flow
          </div>
          <div className="mechUserFlow__spacing1"></div>
          <div className="mechUserFlow__description">
            The initial user flow was sketched using diagrams.net. 
            <br /><br />
            <a href="https://drive.google.com/file/d/1wd61rWYoOmzd0s1s8Wqs9pCD2kOszChx/view">Diagram</a>
          </div>
        </div>
      </section>
    );
  }
}
