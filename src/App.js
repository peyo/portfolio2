import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// google analytics (only page views)
import Analytics from "react-router-ga";

// loading components
import Loadable from "react-loadable";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Analytics id="G-S78FFFJZQR">
          <Switch>
            <Route exact path="/" component={LoadableLandingPage} />
            <Route path="/project-page/spinventory" component={LoadableSpinventoryPage} />
            <Route path="/project-page/mech" component={LoadableMechPage} />
            <Route path="/project-page/cellier" component={LoadableCellierPage}/>
            <Route path="/project-page/shonk" component={LoadableShonkPage} />
            <Route path="/project-page/word" component={LoadableWordPage} />
            {/*<Route path="/resume-page/resume" component={LoadableResumePage} />*/}
            <Route path="/404" component={LoadableNotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Analytics>
      </div>
    );
  }
}

// loadable function
function Loading(props) {
  if (props.error) {
    return (
      <div className="loadable__errorMsg">
        Oh no, something went wrong!
        <br />
        Go back and try again.
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div className="loadable__timeoutMsg">
        It's taking a long time...
        <br />
        Go back and try again.
      </div>
    );
  } else if (props.pastDelay) {
    return <div className="loadable__heart"></div>;
  } else {
    return null;
  }
}

// loadable pages with routes
const LoadableLandingPage = Loadable({
  loader: () => import("./routes/LandingPage/LandingPage"),
  loading: Loading,
  delay: 300,
});

const LoadableSpinventoryPage = Loadable({
  loader: () => import("./routes/ProjectPage/SpinventoryPage"),
  loading: Loading,
  delay: 300,
});

const LoadableMechPage = Loadable({
  loader: () => import("./routes/ProjectPage/MechPage"),
  loading: Loading,
  delay: 300,
});

const LoadableCellierPage = Loadable({
  loader: () => import("./routes/ProjectPage/CellierPage"),
  loading: Loading,
  delay: 300,
});

const LoadableShonkPage = Loadable({
  loader: () => import("./routes/ProjectPage/ShonkPage"),
  loading: Loading,
  delay: 300,
});

const LoadableWordPage = Loadable({
  loader: () => import("./routes/ProjectPage/WordPage"),
  loading: Loading,
  delay: 300,
});

{/*const LoadableResumePage = Loadable({
  loader: () => import("./routes/DEPRECATED - ResumePage/ResumePage"),
  loading: Loading,
  delay: 300,
});*/}

const LoadableNotFoundPage = Loadable({
  loader: () => import("./routes/NotFoundPage/NotFoundPage"),
  loading: Loading,
  delay: 300,
});
