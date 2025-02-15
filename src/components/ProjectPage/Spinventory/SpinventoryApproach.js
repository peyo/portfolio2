import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class SpinventoryApproach extends Component {
  render() {
    return (
      <section className="spinventoryApproach__section">
        <div className="spinventoryApproach__container">
          <div className="spinventoryApproach__title">
            Approach
          </div>
          <div className="spinventoryApproach__spacing1"></div>
          <div className="spinventoryApproach__description">
          The development of Spinventory followed a modern, security-first approach using React for the frontend and Express.js with Node.js for the backend. We leveraged Firebase for both authentication and real-time database capabilities, enabling secure user management and instant data updates. The frontend utilizes Material-UI components to create a clean, intuitive interface that works seamlessly across devices. Role-based access control was implemented through Firebase Authentication and custom middleware, ensuring users can only access appropriate features based on their role (tallier, accountant, or admin). The application's architecture emphasizes separation of concerns, with dedicated API utilities handling data operations and protected routes managing access control. Real-time data synchronization is achieved through Firebase's Realtime Database, while sensitive operations like CSV generation and email delivery are handled securely on the backend. This architecture not only provides a robust foundation for current features but also allows for easy scaling and feature additions in the future.
          </div>
        </div>
      </section>
    );
  }
}
