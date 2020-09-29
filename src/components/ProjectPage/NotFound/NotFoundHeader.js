import React, { Component } from "react";

// bootstrap
import Navbar from "react-bootstrap/Navbar";

// logo
import Logo from "../../../assets/img/Logo.svg";

// css
import "../../../assets/css/everything.css";

export default class NotFoundHeader extends Component {
  render() {
    return (
      <section className="notFoundHeader__header">
        <Navbar className="justify-content-between">
          <Navbar.Brand href="/">
            <img
              alt="peyo's logo"
              src={Logo}
              className="notFoundHeader__logo"
            />{" "}
          </Navbar.Brand>
        </Navbar>
      </section>
    );
  }
}
