import React, { Component } from "react";
import "../../assets/css/everything.css";

// components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProjectSection from "../../components/ProjectSections/ProjectSection";

// google analytics
import ReactGA from "react-ga";
ReactGA.initialize("UA-179253130-1");
ReactGA.pageview(window.location.pathname + window.location.search);

export default class LandingPage extends Component {
  render() {
    return (
      <section className="landingPage">
        <Header />
        <ProjectSection />
        <Footer />
      </section>
    );
  }
}