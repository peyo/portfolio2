import React, { useState, useRef, useEffect } from "react";

// navbar
import NavBar from "../NavBar/NavBar";

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
        <NavBar />
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