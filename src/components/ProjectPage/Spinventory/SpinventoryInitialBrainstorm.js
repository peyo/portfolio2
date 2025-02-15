import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechInitialBrainstorm extends Component {
  render() {
    return (
      <section className="mechInitialBrainstorm__section">
        <div className="mechInitialBrainstorm__container">
          <div className="mechInitialBrainstorm__title">
            Initial Brainstorm
          </div>
          <div className="mechInitialBrainstorm__spacing1"></div>
          <div className="mechInitialBrainstorm__description">
          During our initial brainstorming session for Spinventory, we focused on understanding the core challenges of record store inventory management through targeted questions: What are the specific pain points in the current paper-based system? How many people typically participate in inventory counts, and what are their roles? What is the average time spent on manual data entry and verification? How often are counting errors discovered, and at what stage? What type of reports does the accounting team need to generate, and how frequently? How do managers currently track who counted what and when? What happens when tally sheets are lost or damaged? What kind of devices will staff use for counting inventory? By addressing these questions early in the development process, we identified key features like role-based access, real-time data validation, automated reporting, and audit trails that make Spinventory an effective solution for modernizing inventory management.
          </div>
        </div>
      </section>
    );
  }
}
