import React, { Component } from "react";
import "../../assets/css/everything.css";

// components
import Header from "../../components/Header/Header";
import Subheader from "../../components/Subheader/Subheader";
import Footer from "../../components/Footer/Footer";
import ProjectSection from "../../components/ProjectSections/ProjectSection";

export default class LandingPage extends Component {
  render() {
    return (
      <section className="landingPage">
        <Header />
        <Subheader />
        <ProjectSection />
        <Footer />
      </section>
    );
  }
}