import React, { Component } from "react";
import Butter from "buttercms";
import ProjectCard from "./ProjectCard";
import Keys from "../../config/keys";

class ProjectList extends Component {
  constructor(props) {
    super();
    this.state = {
      butterProjects: [],
      projects: [],
      loaded: false,
      clickedProject: null
    };
  }

  componentDidMount() {
    let keywords = [];
    console.log("Butter cms token:");
    console.log(Keys.butterCMSToken);
    const butter = Butter(Keys.butterCMSToken);
    butter.post
      .list({ page: 1, page_size: 30 })
      .then(function(resp) {
        return resp;
      })
      .then(resp => {
        this.setState({
          projects: resp.data.data,
          loaded: true
        });

        resp.data.data.map((project, i) => {
          return keywords.push(
            ...project.tags.map((tag, i) => {
              return tag.name;
            })
          );
        });

        keywords = [...new Set(keywords)];

        this.props.updateKeywords(keywords);
      });
  }

  onProjectClick = projectName => {
    this.setState({
      clickedProject: projectName
    });
  };

  render() {
    const { selectedKeywords } = this.props;
    let projects = this.state.projects.map((project, index) => {
      let matchedKeywords = false;
      project.tags.forEach((keyword, i) => {
        if (selectedKeywords.includes(keyword.name)) {
          matchedKeywords = true;
        }
      });

      if (matchedKeywords || selectedKeywords.length === 0) {
        return (
          <ProjectCard
            key={index}
            onProjectClick={this.onProjectClick}
            data={project}
          />
        );
      } else {
        return null;
      }
    });

    if (this.state.loaded) {
      return (
        <div
          className="row text-center justify-content-center bg-dark"
          style={{ minHeight: "500px" }}
        >
          {projects}
        </div>
      );
    } else {
      return (
        <div
          className="row justify-content-center bg-dark"
          style={{ minHeight: "500px" }}
        >
          <div className="col text-center">
            <i
              className="fas fa-spinner fa-spin fa-5x"
              style={{ color: "white" }}
            />
          </div>
        </div>
      );
    }
  }
}
export default ProjectList;
