import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class ShonkApproach extends Component {
  render() {
    return (
      <section className="shonkApproach__section">
        <div className="shonkApproach__container">
          <div className="shonkApproach__title">
            Approach
          </div>
          <div className="shonkApproach__spacing1"></div>
          <div className="shonkApproach__description">
            I set up the back-end first by building the resolver and schema. Then, I made the model using Sequlize and migrated the model to an SQLite database. An SQLite database was chosen because of its super easy nature to set up.<br /><br />

            The front-end was connected to the back-end using ApolloClient and wrapping the App with ApolloProvider. I then set up the components, NavBar, Header, and CreateLink. The bulk of the code base resides within CreateLink.js. This file contains a controlled form and the useMutation function to createLink and update cache to add the new link to the list.<br /><br />

            I then set up the components LinkList and Link. These components' primary functions are the query GET_LIST and a map function that maps through data.allLinks and send the data down to the Link component as a prop to render.<br /><br />

            I added a simple service to CopyToClipboard the new link.<br /><br />

            I returned to the back-end to create a MakeSlug service. Essentially, if the user does not create an alias for the link, a slug is created. I added a conditional statement to the Mutation, considering some edge cases.<br /><br />

            I returned to the front-end to tidy up the UI. I added the CSS breakpoints using Material UI's makeStyles function to CreateLink and a theme using the createMuiTheme in the App component.
            <br /><br />
            <a href="https://docs.google.com/document/d/1i7zRPvgfgDmJ_zID4paNJrWItFHRSaYEpwv4oqO3XVM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >Thought Process As Simple List</a>
          </div>
        </div>
      </section>
    );
  }
}
