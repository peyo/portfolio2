import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class NotFoundBody extends Component {
  render() {
    return (
      <section className="notFoundBody__section">
        <div className="notFoundBody__container">
          <div className="notFoundBody__oops">
            404. Oops!
          </div>
          <div className="notFoundBody__spacing1"></div>
          <div className="notFoundBody__youWanderer">
            All that is gold does not glitter,<br />
            <span className="notFoundBody__bold">Not all those who wander are lost;</span><br />
            The old that is strong does not wither,<br />
            Deep roots are not reached by the frost.<br /><br />
            From the ashes a fire shall be woken,<br />
            A light from the shadows shall spring;<br />
            Renewed shall be blade that was broken,<br />
            The crownless again shall be king.<br /><br />
            J. R. R. Tolkien, <i>The Fellowship of the Ring</i>
          </div>
        </div>
      </section>
    );
  }
}
