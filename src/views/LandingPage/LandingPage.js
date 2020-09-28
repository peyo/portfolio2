import React, { Component } from "react";
import "../../assets/css/everything.css";

// components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProjectSection from "../../components/ProjectSections/ProjectSection";

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