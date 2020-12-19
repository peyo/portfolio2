import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class ShonkNext extends Component {
  render() {
    return (
      <section className="shonkNext__section">
        <div className="shonkNext__container">
          <div className="shonkNext__title">
            Next
          </div>
          <div className="shonkNext__spacing1"></div>
          <div className="shonkNext__description">
            <ul className="shonkNext__ul">
              <li>Change database from SQLite to Postgres so I can deploy the app to Heroku.</li>
              <li>Create a working redirect when the shortened URL is click using Route.</li>
              <li>Allow users to create accounts so they can store links uniquely.</li>
              <li>Add security restrictions preventing users from editing or viewing other users' data using JWT.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
