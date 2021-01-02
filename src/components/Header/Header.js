import React, { useState, useRef, useEffect } from "react";

// animations and radium
import { fadeInDown } from "react-animations";
import Radium, {StyleRoot} from "radium";

// navbar
import NavBar from "../NavBar/NavBar";

// css
import "../../assets/css/everything.css";

const styles = {
  fadeInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown")
  }
}

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
      <StyleRoot>
        <div className="header__container" style={styles.fadeInDown}>
          <div className="header__helloWorld">Hello World. I'm Peter.</div>
          <div className="header__spacing"></div>
        </div>
      </StyleRoot>
    </section>
  );
}
export default Header;