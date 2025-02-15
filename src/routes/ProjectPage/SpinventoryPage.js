import React, { Component } from "react";

// components
import SpinventoryHeader from "../../components/ProjectPage/Spinventory/SpinventoryHeader";
import SpinventorySubheader from "../../components/ProjectPage/Spinventory/SpinventorySubheader";
import SpinventoryChallenge from "../../components/ProjectPage/Spinventory/SpinventoryChallenge";
import SpinventoryApproach from "../../components/ProjectPage/Spinventory/SpinventoryApproach";
import SpinventoryInitialBrainstorm from "../../components/ProjectPage/Spinventory/SpinventoryInitialBrainstorm";
import SpinventoryUserFlow from "../../components/ProjectPage/Spinventory/SpinventoryUserFlow";
import SpinventoryPrototype from "../../components/ProjectPage/Spinventory/SpinventoryPrototype";
import SpinventoryLearnings from "../../components/ProjectPage/Spinventory/SpinventoryLearnings";
import SpinventoryNext from "../../components/ProjectPage/Spinventory/SpinventoryNext";
import SpinventoryFooter from "../../components/ProjectPage/Spinventory/SpinventoryFooter";
import Footer from "../../components/Footer/Footer";

// css
import "../../assets/css/everything.css";

export default class SpinventoryPage extends Component {
  render() {
    return (
      <section className="spinventoryPage">
        <SpinventoryHeader />
        <SpinventorySubheader />
        <SpinventoryChallenge />
        <SpinventoryApproach />
        <SpinventoryInitialBrainstorm />
        <SpinventoryUserFlow />
        <SpinventoryPrototype />
        <SpinventoryLearnings />
        <SpinventoryNext />
        <SpinventoryFooter />
        <Footer />
      </section>
    );
  }
}
