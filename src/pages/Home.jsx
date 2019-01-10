import React, { Component } from "react";
import Logo from "../components/Logo";
import Info from "../components/Info";
import ProjectApp from "../components/projects/ProjectApp";
import Footer from "../components/Footer";
import Cv from "../components/Cv";
import Tabs from "../components/Tabs";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="bg-dark">
        <div
          className="container bg-dark"
          style={{ flex: 1, maxWidth: 970, justifyContent: "center" }}
        >
          <Logo />
          <Info />
          <Tabs
            tabsData={[
              {
                title: "Projects",
                content: <ProjectApp />
              },
              {
                title: "Cv",
                content: <Cv />
              }
            ]}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
