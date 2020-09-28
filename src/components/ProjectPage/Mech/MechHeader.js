import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "../../../assets/css/everything.css";

export default class MechHeader extends Component {
  render() {
    return (
      <section className="mechHeader__header">
        <Navbar className="justify-content-between">
          <Navbar.Brand href="/">
            <img
              alt="peyo's logo"
              src="../../assets/img/Logo.svg"
              width="30"
              height="30"
              className="header__navbar"
            />{" "}
          </Navbar.Brand>
        </Navbar>
        <div className="mechHeader__container">
          <div className="mechHeader__shortDescription">
            Mech is a community for car owners where users can register an
            account, save their car make and model, and search diagnostic
            trouble codes (DTC). After performing the DTC search, users can
            chat Reddit-style with other car owners for potential
            solutions.
          </div>
          <div className="mechHeader__spacing1"></div>
        </div>
      </section>
    );
  }
}
