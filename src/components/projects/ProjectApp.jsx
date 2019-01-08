import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Select from "react-select";

class ProjectApp extends Component {
  constructor(props) {
    super();
    this.state = {
      keywords: [],
      selectedKeywords: []
    };
  }

  updateKeywords = keywords => {
    const labeledKeywords = keywords.map((kw, i) => {
      return { label: kw, value: kw };
    });
    this.setState({ keywords: labeledKeywords });
  };

  updateSelectedKeywords = value => {
    this.setState({
      selectedKeywords: value
    });
  };

  cleanSelectedKeywords = data => {
    return data.map((dat, i) => {
      return dat.value;
    });
  };

  render() {
    return (
      <div className="text-center justify-content-center mt-4">
        <br />
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={this.state.keywords}
          value={this.state.selectedKeywords}
          onChange={this.updateSelectedKeywords}
          closeMenuOnSelect
        />
        <br />
        <ProjectList
          updateKeywords={this.updateKeywords}
          selectedKeywords={this.cleanSelectedKeywords(
            this.state.selectedKeywords
          )}
        />
      </div>
    );
  }
}
export default ProjectApp;
