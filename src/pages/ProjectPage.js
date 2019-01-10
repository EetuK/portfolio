import React, { Component } from "react";
import Butter from "buttercms";
import Logo from "../components/Logo";
import ProjectSheet from "../components/projects/ProjectSheet";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Keys from "../config/keys";

class ProjectPage extends Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false
    };
  }

  componentDidMount = () => {
    const butter = Butter(Keys.butterCMSToken);
    let { slug } = this.props.match.params;
    butter.post.retrieve(slug).then(resp => {
      this.setState({
        post: resp.data.data,
        loaded: true
      });
    });
  };

  render() {
    const { post, loaded } = this.state;
    return (
      <div className="bg-dark">
        <div
          className="container bg-dark"
          style={{ flex: 1, maxWidth: 970, justifyContent: "center" }}
        >
          <Logo />
          <Navigation showHomeButton showProjectsButton />

          {loaded ? (
            <ProjectSheet data={post} />
          ) : (
            <div className="text-center">
              <i
                className="fas fa-spinner fa-spin fa-5x"
                style={{ color: "white" }}
              />
            </div>
          )}

          <Footer />
        </div>
      </div>
    );
  }
}

export default ProjectPage;
