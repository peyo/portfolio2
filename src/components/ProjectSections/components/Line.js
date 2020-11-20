import React, { Component } from "react";
import "../../../assets/css/everything.css";

// lazyload
import LazyLoad from "react-lazyload";

export default class Line extends Component {
  render() {
    return (
      <LazyLoad once offset={100}>
          <section className="line">
            <div className="line__line">
            </div>
          </section>
      </LazyLoad>
    );
  }
}