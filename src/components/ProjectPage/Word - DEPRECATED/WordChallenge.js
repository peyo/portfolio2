import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class WordChallenge extends Component {
  render() {
    return (
      <section className="wordChallenge__section">
        <div className="wordChallenge__container">
          <div className="wordChallenge__title">
            Challenge
          </div>
          <div className="wordChallenge__spacing1"></div>
          <div className="wordChallenge__description">
            Words have specific definitions, but everyone has their own perception of the word based on their experiences. A person's experience can stem from books, poems, music, videos, and news articles. A word's sentiment for one person could be very different from another person. The wide word sentiment spectrum can cause potential miscommunications.
          </div>
        </div>
      </section>
    );
  }
}
