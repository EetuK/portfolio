import React, { Component } from "react";
import Logo from "../components/Logo";
import ProjectApp from "../components/projects/ProjectApp";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

class Projects extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div
          className="container bg-dark"
          style={{ flex: 1, maxWidth: 970, justifyContent: "center" }}
        >
          <Logo />
          <Navigation showHomeButton showProjectsButton title="Projects" />
          <ProjectApp />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Projects;
