import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechApproach extends Component {
  render() {
    return (
      <section className="mechApproach__section">
        <div className="mechApproach__container">
          <div className="mechApproach__title">
            Approach
          </div>
          <div className="mechApproach__spacing1"></div>
          <div className="mechApproach__description">
            Create a forum where people can search by specific car make & model and DTC. Provide a voting system so that the best solutions float to the top. Create a comprehensive database of universal DTCs, car makes, and car make specific DTCs.
          </div>
        </div>
      </section>
    );
  }
}
