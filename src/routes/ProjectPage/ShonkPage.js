import React, { Component } from "react";

// components
import ShonkHeader from "../../components/ProjectPage/Shonk/ShonkHeader";
import ShonkChallenge from "../../components/ProjectPage/Shonk/ShonkChallenge";
import ShonkApproach from "../../components/ProjectPage/Shonk/ShonkApproach";
import ShonkPrototype from "../../components/ProjectPage/Shonk/ShonkPrototype";
import ShonkLearnings from "../../components/ProjectPage/Shonk/ShonkLearnings";
import ShonkNext from "../../components/ProjectPage/Shonk/ShonkNext";
import ShonkFooter from "../../components/ProjectPage/Shonk/ShonkFooter";
import Footer from "../../components/Footer/Footer";

// css
import "../../assets/css/everything.css";

export default class ShonkPage extends Component {
  render() {
    return (
      <section className="shonkPage">
        <ShonkHeader />
        <ShonkChallenge />
        <ShonkApproach />
        <ShonkPrototype />
        <ShonkLearnings />
        <ShonkNext />
        <ShonkFooter />
        <Footer />
      </section>
    );
  }
}
