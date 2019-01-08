import React from "react";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  onThisClick() {
    let name = this.props.data.title;
    this.props.onProjectClick(name);
  }

  render() {
    return (
      <div className="col-sm-11 m-1 card" onClick={this.onThisClick.bind(this)}>
        <div className="card-body">
          <img
            alt="Logo"
            className="img-responsive"
            src={this.props.data.featured_image}
          />
          <h5 className="card-title">{this.props.data.title}</h5>
          <div
            className="text-muted card-text"
            dangerouslySetInnerHTML={{ __html: this.props.data.summary }}
          />
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
