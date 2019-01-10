import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { showProjectsButton, showHomeButton, title } = this.props;
    return (
      <div className="row mt-4">
        <div className="col">
          {showHomeButton ? (
            <Link to="/">
              <button type="button" className="btn btn-outline-light m-1">
                <i class="fas fa-arrow-left" />
                {"  "}Home
              </button>
            </Link>
          ) : (
            <p />
          )}

          {showProjectsButton ? (
            <Link to="/projects">
              <button type="button" className="btn btn-outline-light m-1">
                All Projects
              </button>
            </Link>
          ) : (
            <p />
          )}
        </div>
        <div className="col text-center">
          {title !== undefined || title ? (
            <h1 className="text-white">{title}</h1>
          ) : (
            <p />
          )}
        </div>
        <div className="col" />
      </div>
    );
  }
}

export default withRouter(Navigation);
