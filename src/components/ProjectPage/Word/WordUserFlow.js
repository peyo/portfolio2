import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class WordUserFlow extends Component {
  render() {
    return (
      <section className="wordUserFlow__section">
        <div className="wordUserFlow__container">
          <div className="wordUserFlow__title">
            User Stories & Flow
          </div>
          <div className="wordUserFlow__spacing1"></div>
          <div className="wordUserFlow__description">
            <a href="https://docs.google.com/spreadsheets/d/1DSv87iA-_IdfiQsjQC5xvKN9Xq5LgBDip4Ff4u8SrpE/edit?usp=sharing">User Stories</a>
            <br />
            <a href="https://drive.google.com/file/d/1ixwMXnK1cC4p6smIDbBIoSiKoQJfefgx/view?usp=sharing">Wire Frames</a>
          </div>
        </div>
      </section>
    );
  }
}
