import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class WordLearnings extends Component {
  render() {
    return (
      <section className="wordLearnings__section">
        <div className="wordLearnings__container">
          <div className="wordLearnings__title">
            Learnings
          </div>
          <div className="wordLearnings__spacing1"></div>
          <div className="wordLearnings__description">
            Initially, the content sections weren't very clear. Different typography provided a clear content hierarchy. Also, the poem and lyrics were too long. A show more or show less button shortens the length of the content.
          </div>
        </div>
      </section>
    );
  }
}
