import React, { Component } from "react";

// components
import CellierHeader from "../../components/ProjectPage/Cellier/CellierHeader";
import CellierSubheader from "../../components/ProjectPage/Cellier/CellierSubheader";
import CellierChallenge from "../../components/ProjectPage/Cellier/CellierChallenge";
import CellierApproach from "../../components/ProjectPage/Cellier/CellierApproach";
import CellierInitialBrainstorm from "../../components/ProjectPage/Cellier/CellierInitialBrainstorm";
import CellierUserFlow from "../../components/ProjectPage/Cellier/CellierUserFlow";
import CellierPrototype from "../../components/ProjectPage/Cellier/CellierPrototype";
import CellierLearnings from "../../components/ProjectPage/Cellier/CellierLearnings";
import CellierNext from "../../components/ProjectPage/Cellier/CellierNext";
import CellierFooter from "../../components/ProjectPage/Cellier/CellierFooter";
import Footer from "../../components/Footer/Footer";

// css
import "../../assets/css/everything.css";

export default class CellierPage extends Component {
  render() {
    return (
      <section className="cellierPage">
        <CellierHeader />
        <CellierSubheader />
        <CellierChallenge />
        <CellierApproach />
        <CellierInitialBrainstorm />
        <CellierUserFlow />
        <CellierPrototype />
        <CellierLearnings />
        <CellierNext />
        <CellierFooter />
        <Footer />
      </section>
    );
  }
}
