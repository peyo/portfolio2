import React, { Component } from "react";
import "../../assets/css/everything.css";

// components
import Spinventory from "./components/Spinventory";
import Mech from "./components/Mech";
import Line from "./components/Line";
import Cellier from "./components/Cellier";
import Shonk from "./components/Shonk";
import Word from "./components/Word";
import { Spinner } from "react-bootstrap";

export default class ProjectSection extends Component {
  render() {
    return (
      <section className="projectSection">
        <Line />
        <Spinventory />
        <Line />
        <Mech />
        <Line />
        <Cellier />
        <Line />
        <Shonk />
        <Line />
        <Word />
      </section>
    );
  }
}