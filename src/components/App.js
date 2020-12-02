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
import ProjectDetail from "./ProjectDetail"

function App() {
  return (
      <React.Fragment>
          <CssBaseline />
          <Topbar />
          <Animation/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Home}/>
              <Route path="/experience" component={Experience} />
              <Route path="/project" component={Project} />
              <Route path="/contact" component={Contact}/>
              <Route path="/pd" component={ProjectDetail}/>
          </Switch>
      </React.Fragment>
  );
}

export default App;
