import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class MechUserFlow extends Component {
  render() {
    return (
      <section className="mechUserFlow__section">
        <div className="mechUserFlow__container">
          <div className="mechUserFlow__title">
            User Stories & Flow
          </div>
          <div className="mechUserFlow__spacing1"></div>
          <div className="mechUserFlow__description">
            Users begin at a centralized login page where their credentials determine their role-specific access. Upon 
            authentication, they're automatically directed to their role-appropriate dashboard: talliers to the counting 
            interface, accountants to the reporting dashboard, and administrators to the user management panel. Each interface 
            is tailored to the specific needs of that role, providing only the necessary tools and permissions for their responsibilities.
            <br />
            <br />
            As a tallier,
            I want to input record counts for specific conditions (New/Used)
            So that I can accurately document inventory without paper forms
            - I can select condition type
            - I can input counts for different record types
            - I can submit my counts and receive confirmation
            - I can view and edit my previous submissions
            <br />
            <br />
            As an accountant,
            I want to generate inventory reports for specific date ranges
            So that I can analyze inventory data without manual data entry
            - I can select start and end dates for the report
            - I can receive formatted CSV data via email
            <br />
            <br />
            As an administrator,
            I want to manage user accounts and access permissions
            So that I can maintain system security and user organization
            - I can assign or modify user roles
            - I can remove user access when needed
            - I can view all inventory data
          </div>
        </div>
      </section>
    );
  }
}
