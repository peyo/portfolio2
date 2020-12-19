import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class ShonkLearnings extends Component {
  render() {
    return (
      <section className="shonkLearnings__section">
        <div className="shonkLearnings__container">
          <div className="shonkLearnings__title">
            Learnings
          </div>
          <div className="shonkLearnings__spacing1"></div>
          <div className="shonkLearnings__description">
            I learned and used Apollo Client and Server, GraphQL, and Sequelize for the first time. I found it relatively easy to replace REST API calls with Mutations and Queries. I haven’t used GraphQL enough to have a well-informed opinion, but I prefer it over REST API calls at the surface level. I also learned it was quite convenient to update data using `update` in the useMutation function with the `writeFragment` function.<br /><br />

            I saw the benefits of using Material UI to create a design system. Writing code that influences design within the same file can help the developer find the controlling code block quickly. Also, using Material UI documentation and resources created a more consistent and universal way of writing code.
          </div>
        </div>
      </section>
    );
  }
}
