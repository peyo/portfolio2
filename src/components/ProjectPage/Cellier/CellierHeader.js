import React, { useState, useRef, useEffect } from "react";

// react hamburger menu
import { slide as Menu } from "react-burger-menu";

// bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// logo
import Logo from "../../../assets/img/Logo.svg";

// css
import "../../../assets/css/everything.css";

function CellierHeader() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.pageYOffset > window.innerHeight * 0.9;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="cellierHeader__header">
      <Navbar
        className="cellierHeader__navbar"
        style={{
          backgroundColor: navBackground ? "#f0f0f0" : "transparent",
        }}
      >
        <Navbar.Brand href="/">
          <img alt="peyo's logo" src={Logo} className="cellierHeader__logo" />{" "}
        </Navbar.Brand>
        <Menu right width={"210px"} noOverlay>
          <Nav className="mr-sm-2">
            <Nav.Link
              href="https://www.linkedin.com/in/peteryyoon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="header__navLink">linkedin</div>
            </Nav.Link>
            <Nav.Link
              href="https://github.com/peyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="header__navLink">github</div>
            </Nav.Link>
            <Nav.Link
              href="https://leetcode.com/problems/maximal-network-rank/discuss/903980/(Javascript)-4-steps-including-base-case.-(96-ms-faster-than-98.79-43.5-MB-less-than-5.45)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="header__navLink">leetcode</div>
            </Nav.Link>
            <Nav.Link
              href="/resume-page/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="header__navLink">resume</div>
            </Nav.Link>
          </Nav>
        </Menu>
      </Navbar>
      <div className="cellierHeader__container">
        <div className="cellierHeader__shortDescription">
          Cellier is a search tool that helps people find different distributors
          of essential oils, fragrance oils, absolutes, and waxes. It will also
          recommend oils that mix well with others based on a fragrance wheel.
        </div>
        <div className="cellierHeader__spacing1"></div>
      </div>
    </section>
  );
}
export default CellierHeader;
