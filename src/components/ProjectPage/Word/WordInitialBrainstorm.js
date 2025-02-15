import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class WordInitialBrainstorm extends Component {
  render() {
    return (
      <section className="wordInitialBrainstorm__section">
        <div className="wordInitialBrainstorm__container">
          <div className="wordInitialBrainstorm__title">
            Initial Brainstorm
          </div>
          <div className="wordInitialBrainstorm__spacing1"></div>
          <div className="wordInitialBrainstorm__description">
            These were some of the considered questions during this step. What other sources can give a more in-depth sentiment score?  Books, poems, song titles, lyrics, and news articles. How will we analyze these sources? A sentiment API or locally stored sentiment analysis engine. How will we provide an overall sentiment score? Average the individual scores.
          </div>
        </div>
      </section>
    );
  }
}
