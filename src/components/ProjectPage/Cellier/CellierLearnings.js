import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class CellierLearnings extends Component {
  render() {
    return (
      <section className="cellierLearnings__section">
        <div className="cellierLearnings__container">
          <div className="cellierLearnings__title">
            Learnings
          </div>
          <div className="cellierLearnings__spacing1"></div>
          <div className="cellierLearnings__description">
            The focus here was testing all the endpoints and services. I wrote sixty-four tests for all the end-point and services. An additional focus was exploring authentication to allow users to only update and delete their own objects. For example, each comment is saved with a users_id as one of the columns. When a user logs in, he is given his own token. The token expires if the user is inactive. When a user tries to delete or patch his own comment, the particular comment is verified using a users_id that is in the token and the users_id of the comment.
          </div>
        </div>
      </section>
    );
  }
}
