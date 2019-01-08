import React, { Component } from "react";
//import Butter from 'buttercms';
import ProjectCard from "./ProjectCard";
import ProjectSheet from "./ProjectSheet";
import ProjectsData from "../../projects.json";

class ProjectList extends Component {
  constructor(props) {
    super();
    this.state = {
      projects: [],
      clickedProject: null
    };
  }
  componentDidMount() {
    /*const butter = Butter('4cdbbe9df44593599957e9e3784fc46bedc8089a');
        butter.post.list({page: 1, page_size: 30})
            .then(function(resp){
                console.log(resp);
                return resp;
            })
            .then((resp) => {
                this.setState({
                    projects: resp.data.data
                })
            });*/
    this.setState({ projects: ProjectsData });
    let keywords = [];
    ProjectsData.map((project, i) => {
      return keywords.push(...project.keywords);
    });
    keywords = [...new Set(keywords)];
    this.props.updateKeywords(keywords);
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
      project.keywords.forEach((keyword, i) => {
        if (selectedKeywords.includes(keyword)) {
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
      }
    });

    let projectFull = this.state.projects.map((project, index) => {
      if (project.title === this.state.clickedProject) {
        return (
          <ProjectSheet
            key={index}
            onProjectClick={this.onProjectClick}
            data={project}
          />
        );
      }
    });

    let state = null;

    if (this.state.clickedProject != null) {
      return (
        <div className="row text-center justify-content-center bg-dark">
          {projectFull}
        </div>
      );
    } else {
      return (
        <div className="row text-center justify-content-center bg-dark">
          {projects}
        </div>
      );
    }
  }
}
export default ProjectList;
