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
      <div className="text-center mt-4">
        <div className=" row justify-content-center ">
          <div className="col-sm-4">
            <h5 className="text-white">Search by technology</h5>

            <Select
              isMulti
              options={this.state.keywords}
              value={this.state.selectedKeywords}
              onChange={this.updateSelectedKeywords}
              closeMenuOnSelect
            />
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col">
            <ProjectList
              updateKeywords={this.updateKeywords}
              selectedKeywords={this.cleanSelectedKeywords(
                this.state.selectedKeywords
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectApp;
