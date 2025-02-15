import React, { useState, useEffect } from "react";

// react hamburger menu
import { slide as Menu } from "react-burger-menu";

// bootstrap
import Nav from "react-bootstrap/Nav";

// menu
import Hamburger from "../../assets/img/Menu/Hamburger/medium-rare.svg";
//import Cross from "../../assets/img/Menu/Cross/bone-thugs.svg";

function ResponsiveBurger() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakPoint) {
    return (
      <div className="responsiveBurger__links">
        <Nav.Link
          href="https://www.linkedin.com/in/peteryyoon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="responsiveBurger__navLink">linkedin</div>
        </Nav.Link>
        <Nav.Link
          href="https://github.com/peyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="responsiveBurger__navLink">github</div>
        </Nav.Link>
        <Nav.Link
          href="https://leetcode.com/problems/maximal-network-rank/discuss/903980/(Javascript)-4-steps-including-base-case.-(96-ms-faster-than-98.79-43.5-MB-less-than-5.45)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="responsiveBurger__navLink">leetcode</div>
        </Nav.Link>
      </div>
    );
  } else {
    return (
      <Menu
        right
        width={"210px"}
        disableOverlayClick
        customBurgerIcon={<img alt="hamburger, medium-rare" src={Hamburger} />}
      >
        <Nav.Link
          href="https://www.linkedin.com/in/peteryyoon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="responsiveBurger__navLink">linkedin</div>
        </Nav.Link>
        <Nav.Link
          href="https://github.com/peyo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="responsiveBurger__navLink">github</div>
        </Nav.Link>
        <Nav.Link
          href="https://leetcode.com/problems/maximal-network-rank/discuss/903980/(Javascript)-4-steps-including-base-case.-(96-ms-faster-than-98.79-43.5-MB-less-than-5.45)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="responsiveBurger__navLink">leetcode</div>
        </Nav.Link>
      </Menu>
    );
  }
}
export default ResponsiveBurger;
