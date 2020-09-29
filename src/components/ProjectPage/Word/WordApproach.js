import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class WordApproach extends Component {
  render() {
    return (
      <section className="wordApproach__section">
        <div className="wordApproach__container">
          <div className="wordApproach__title">
            Approach
          </div>
          <div className="wordApproach__spacing1"></div>
          <div className="wordApproach__description">
            Provide users the ability to acquire a better understanding and feeling of words with a sentiment score using an accumulation of sentiment scores based on definitions, poems, lyrics, and videos. Pass a word through a dictionary, lyric, and poem API. The song title will be passed through YouTube's API to search for a video. The poem title will be passed through Google Book's API to search for a book. All texts will be based on a sentiment analysis to get a sentiment score.
          </div>
        </div>
      </section>
    );
  }
}
