import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// views
import LandingPage from "./views/LandingPage/LandingPage";
import MechPage from "./views/ProjectPage/MechPage";
import CellierPage from "./views/ProjectPage/CellierPage";
import WordPage from "./views/ProjectPage/WordPage";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/project-page/mech" component={MechPage} />
            <Route path="/project-page/cellier" component={CellierPage} />
            <Route path="/project-page/word" component={WordPage} />
          </Switch>
      </div>
    );
  }
}