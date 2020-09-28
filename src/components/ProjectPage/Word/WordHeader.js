import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "../../../assets/css/everything.css";

export default class WordHeader extends Component {
  render() {
    return (
      <section className="wordHeader__header">
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
        <div className="wordHeader__container">
          <div className="wordHeader__shortDescription">
            Word helps users acquire a better understanding and feeling of words through a sentiment score using definitions, poems, lyrics, and videos.
          </div>
          <div className="wordHeader__spacing1"></div>
        </div>
      </section>
    );
  }
}
