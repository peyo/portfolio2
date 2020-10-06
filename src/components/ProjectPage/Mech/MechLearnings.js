import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechLearnings extends Component {
  render() {
    return (
      <section className="mechLearnings__section">
        <div className="mechLearnings__container">
          <div className="mechLearnings__title">
            Learnings
          </div>
          <div className="mechLearnings__spacing1"></div>
          <div className="mechLearnings__description">
            This project required several new topical explorations, such as JSON Web Tokens (JWT), for the authentication and login components. Also, Node.js, specifically Express and Knex to build the back-end. Express is a framework that helps with creating API requests and responses. Knex is a Javascript to SQL translator used to write the services and acts as an object-relational mapping technique to our database connection. Mech uses Postgres for the database. Postgres is a relational database that will persist data. A particularly interesting part was learning to use Scrapy (Python) to scrape DTC from various sources on the web to start the data table's first lines. Fun times!
          </div>
        </div>
      </section>
    );
  }
}
