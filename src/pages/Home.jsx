import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Links from "../components/Links";
import Logo from "../components/Logo";
import Info from "../components/Info";
import ProjectApp from "../components/projects/ProjectApp";
import ProjectPage from "../pages/ProjectPage";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Cv from "../components/Cv";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Router>
          <div
            className="container bg-dark"
            style={{ flex: 1, maxWidth: 970, justifyContent: "center" }}
          >
            <Logo />
            <Links />
            <Info />
            <Navigation />
            <div>
              <Route exact path="/" component={ProjectApp} />
              <Route exact path="/cv" component={Cv} />
              <Route exact path="/projects/:title" component={ProjectPage} />
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default Home;
