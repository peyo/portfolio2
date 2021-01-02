import React, { useState, useRef, useEffect } from "react";
import ResponsiveBurger from "./ResponsiveBurger";

// bootstrap
import Navbar from "react-bootstrap/Navbar";

// logo
import Logo from "../../assets/img/Logo.svg";

// css
import "../../assets/css/everything.css";

function NavBar() {
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
    <section className="navbar__header">
      <div className="navbar__navbar-container">
        <Navbar
          className="navbar__navbar"
          style={{
            backgroundColor: navBackground ? "#ffffff" : "transparent",
          }}
        >
          <Navbar.Brand>
            <a href="/">
              <img alt="peyo's logo" src={Logo} className="navbar__logo" />{" "}
            </a>
          </Navbar.Brand>
          <ResponsiveBurger />
        </Navbar>
      </div>
    </section>
  );
}
export default NavBar;
