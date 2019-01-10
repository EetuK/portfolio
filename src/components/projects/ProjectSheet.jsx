import React from "react";

class ProjectSheet extends React.Component {
  render() {
    return (
      <div className="col m-2 p-2 alert alert-secondary">
        <div>
          <button className="close">
            <span>&times;</span>
          </button>
          <h5>{this.props.data.title}</h5>
          <div dangerouslySetInnerHTML={{ __html: this.props.data.body }} />
        </div>
      </div>
    );
  }
}

export default ProjectSheet;
