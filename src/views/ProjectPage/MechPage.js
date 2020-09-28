import React, { Component } from "react";

// components
import MechHeader from "../../components/ProjectPage/Mech/MechHeader";
import MechChallenge from "../../components/ProjectPage/Mech/MechChallenge";
import MechApproach from "../../components/ProjectPage/Mech/MechApproach";
import MechInitialBrainstorm from "../../components/ProjectPage/Mech/MechInitialBrainstorm";
import MechUserFlow from "../../components/ProjectPage/Mech/MechUserFlow";
import MechAlphaTesting from "../../components/ProjectPage/Mech/MechAlphaTesting";
import MechPrototype from "../../components/ProjectPage/Mech/MechPrototype";
import MechLearnings from "../../components/ProjectPage/Mech/MechLearnings";
import MechNext from "../../components/ProjectPage/Mech/MechNext";
import MechFooter from "../../components/ProjectPage/Mech/MechFooter";

// css
import "../../assets/css/everything.css";

export default class MechPage extends Component {
  render() {
    return (
      <section className="mechPage">
        <MechHeader />
        <MechChallenge />
        <MechApproach />
        <MechInitialBrainstorm />
        <MechUserFlow />
        <MechAlphaTesting />
        <MechPrototype />
        <MechLearnings />
        <MechNext />
        <MechFooter />
      </section>
    );
  }
}
