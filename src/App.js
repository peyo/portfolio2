import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// views
import LandingPage from "./views/LandingPage/LandingPage";
import MechPage from "./views/ProjectPage/MechPage";
import CellierPage from "./views/ProjectPage/CellierPage";
import WordPage from "./views/ProjectPage/WordPage";
import ResumePage from "./views/ResumePage/ResumePage";

// route transition
import { spring, AnimatedSwitch } from "react-router-transition";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
          >
            <Route exact path="/" component={LandingPage} />
            <Route path="/project-page/mech" component={MechPage} />
            <Route path="/project-page/cellier" component={CellierPage} />
            <Route path="/project-page/word" component={WordPage} />
            <Route path="/resume-page/resume" component={ResumePage} />
          </AnimatedSwitch>
        </Switch>
      </div>
    );
  }
}

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};