import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Projects from "./pages/Projects";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects/:slug" component={ProjectPage} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
