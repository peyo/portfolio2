import React, { useState, useRef, useEffect } from "react";

// react hamburger menu
import { slide as Menu } from "react-burger-menu";

// bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// logo
import Logo from "../../assets/img/Logo.svg";

// css
import "../../assets/css/everything.css";

function Header() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.pageYOffset > (window.innerHeight)*0.9;
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
    <section className="header__header">
      <div className="header__navbar-container">
        <Navbar
          className="header__navbar"
          style={{
            backgroundColor: navBackground ? "#f0f0f0" : "transparent",
          }}
        >
          <Navbar.Brand>
            <img alt="peyo's logo" src={Logo} className="header__logo" />{" "}
          </Navbar.Brand>
          <Menu right width={"210px"} noOverlay>
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
          </Menu>
        </Navbar>
      </div>
      <div className="header__container">
        <div className="header__helloWorld">Hello World. I'm Peter.</div>
        <div className="header__spacing1"></div>
        <div className="header__shortBio">
          I believe curiosity and openness, paired with self-discipline and
          diligence, lead to great outcomes. Check out my explorations, applying
          curiosity and self-discipline to create simple to complex solutions.
        </div>
        <div className="header__spacing2"></div>
      </div>
    </section>
  );
}
export default Header;