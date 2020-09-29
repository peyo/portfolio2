import React, { Component } from "react";

// components
import NotFoundHeader from "../../components/ProjectPage/NotFound/NotFoundHeader";
import NotFoundBody from "../../components/ProjectPage/NotFound/NotFoundBody";

// css
import "../../assets/css/everything.css";

export default class NotFoundPage extends Component {
  render() {
    return (
      <section className="notFoundPage">
        <NotFoundHeader />
        <NotFoundBody />
      </section>
    );
  }
}
