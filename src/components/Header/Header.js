import React, { Component } from "react";

// bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// logo
import Logo from "../../assets/img/Logo.svg";

// css
import "../../assets/css/everything.css";

export default class Header extends Component {
  render() {
    return (
      <section className="header__header">
        <Navbar className="justify-content-between">
          <Navbar.Brand>
            <img alt="peyo's logo" src={Logo} className="header__logo" />{" "}
          </Navbar.Brand>
          <Nav className="mr-sm-2">
            <Nav.Link
              href="https://www.linkedin.com/in/peteryyoon/"
              target="_blank"
            >
              <div className="header__navLink">
                linkedin
              </div>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/peyo"
              target="_blank"
            >
              <div className="header__navLink">
                github
              </div>
            </Nav.Link>
            <Nav.Link
              href="/resume-page/resume"
              target="_blank"
            >
              <div className="header__navLink">
                resume
              </div>
            </Nav.Link>
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
