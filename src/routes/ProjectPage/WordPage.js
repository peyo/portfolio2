import React, { Component } from "react";

// components
import WordHeader from "../../components/ProjectPage/Word/WordHeader";
import WordSubheader from "../../components/ProjectPage/Word/WordSubheader";
import WordChallenge from "../../components/ProjectPage/Word/WordChallenge";
import WordApproach from "../../components/ProjectPage/Word/WordApproach";
import WordInitialBrainstorm from "../../components/ProjectPage/Word/WordInitialBrainstorm";
import WordUserFlow from "../../components/ProjectPage/Word/WordUserFlow";
import WordPrototype from "../../components/ProjectPage/Word/WordPrototype";
import WordLearnings from "../../components/ProjectPage/Word/WordLearnings";
import WordNext from "../../components/ProjectPage/Word/WordNext";
import WordFooter from "../../components/ProjectPage/Word/WordFooter";
import Footer from "../../components/Footer/Footer";

// css
import "../../assets/css/everything.css";

export default class WordPage extends Component {
  render() {
    return (
      <section className="wordPage">
        <WordHeader />
        <WordSubheader />
        <WordChallenge />
        <WordApproach />
        <WordInitialBrainstorm />
        <WordUserFlow />
        <WordPrototype />
        <WordLearnings />
        <WordNext />
        <WordFooter />
        <Footer />
      </section>
    );
  }
}
