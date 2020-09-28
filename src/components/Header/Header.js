import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import "../../assets/css/everything.css";

export default class Header extends Component {
  render() {
    return (
      <section className="header__header">
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
          <Nav className="mr-sm-2">
            <Nav.Link href="#linkedin">linkedin</Nav.Link>
            <Nav.Link href="#github">github</Nav.Link>
            <Nav.Link href="#resume">resume</Nav.Link>
          </Nav>
        </Navbar>
        <div className="header__container">
          <div className="header__helloWorld">Hello World. I'm Peter.</div>
          <div className="header__spacing1"></div>
          <div className="header__shortBio">
            I believe great outcomes are achieved when curiosity and openness
            are paired with self-discipline and diligence. These are traits that
            afford us the ability to tackle new challenges. Coding is an area
            for me to apply curiosity and self-discipline and learn new skills
            to create simple to complex solutions. Check out my explorations
            below.
          </div>
          <div className="header__spacing2"></div>
        </div>
      </section>
    );
  }
}
