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
            Initially the way the content segmentation wasn't very clear. Different typography provided a clear content hierarchy. Also, the poem and lyrics were too long. A show more or show less button shorten the length of the content.
          </div>
        </div>
      </section>
    );
  }
}
