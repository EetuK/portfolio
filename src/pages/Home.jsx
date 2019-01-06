import React, { Component } from "react";
import Links from "../components/Links";
import Logo from "../components/Logo";
import Info from "../components/Info";
import ProjectApp from "../components/projects/ProjectApp";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div
          className="container bg-dark"
          style={{ flex: 1, maxWidth: 970, justifyContent: "center" }}
        >
          <Logo />
          <Links />
          <Info />
          <ProjectApp />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
