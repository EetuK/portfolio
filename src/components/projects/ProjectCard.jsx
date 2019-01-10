import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="col-sm-5 margin-5px">
        <Link className="link" to={"projects/" + this.props.data.slug}>
          <div className="card card-height hover-link">
            <div className="card-header hover-link">
              <h5 className="text-dark">
                {this.props.data.title}{" "}
                {/*<div className="btn btn-primary">
                  Project page <i class="fas fa-arrow-right" />
    </div>*/}
              </h5>
              {this.props.data.tags.map((tag, i) => {
                return (
                  <span class="badge badge-secondary mr-1 ml-1">
                    {tag.name}
                  </span>
                );
              })}
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <img
                    alt="Logo"
                    className="img-responsive img-card"
                    src={this.props.data.featured_image}
                  />
                </div>
                <div className="col">
                  <div
                    className="text-muted text-small align-middle"
                    dangerouslySetInnerHTML={{
                      __html: this.props.data.summary
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectCard;
