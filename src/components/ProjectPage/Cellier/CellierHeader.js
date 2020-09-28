import React, { Component } from "react";

// bootstrap
import Navbar from "react-bootstrap/Navbar";

// logo
import Logo from "../../../assets/img/Logo.svg";

// css
import "../../../assets/css/everything.css";

export default class CellierHeader extends Component {
  render() {
    return (
      <section className="cellierHeader__header">
        <Navbar className="justify-content-between">
          <Navbar.Brand href="/">
            <img
              alt="peyo's logo"
              src={Logo}
              className="cellierHeader__logo"
            />{" "}
          </Navbar.Brand>
        </Navbar>
        <div className="cellierHeader__container">
          <div className="cellierHeader__shortDescription">
            Cellier is a search tool that helps people find different distributors of essential oils, fragrance oils, absolutes, and waxes. It will also recommend oils that mix well with others based on a fragrance wheel.
          </div>
          <div className="cellierHeader__spacing1"></div>
        </div>
      </section>
    );
  }
}
