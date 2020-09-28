import React, { Component } from "react";
import "../../assets/css/everything.css";

// components
import Mech from "./components/Mech";
import Line from "./components/Line";
import Cellier from "./components/Cellier";
import Word from "./components/Word";

export default class ProjectSection extends Component {
  render() {
    return (
      <section className="projectSection">
        <Mech />
        <Line />
        <Cellier />
        <Line />
        <Word />
        <Line />
      </section>
    );
  }
}