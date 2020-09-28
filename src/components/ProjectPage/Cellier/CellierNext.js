import React, { Component } from "react";
import "../../../assets/css/everything.css";

export default class CellierNext extends Component {
  render() {
    return (
      <section className="cellierNext__section">
        <div className="cellierNext__container">
          <div className="cellierNext__title">
            Next
          </div>
          <div className="cellierNext__spacing1"></div>
          <div className="cellierNext__description">
            <ul className="cellierNext__ul">
              <li>Uno</li>
              <li>Dos</li>
              <li>Tres</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
