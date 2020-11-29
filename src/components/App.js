import React from "react";
import '../styles/App.css';
import { Route, Switch } from "react-router-dom";
import Topbar from "./Topbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./Home";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import "../styles/App.css";
import Animation from "./Animation";

function App() {
  return (
      <React.Fragment>
          <CssBaseline />
          <Topbar />
          <Animation/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/project" component={Project} />
              <Route exact path="/contact" component={Contact}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
