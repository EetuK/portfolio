import React, { Component } from "react";
import "./Links.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

class Links extends Component {
  render() {
    return (
      <nav className="row bg-dark justify-content-center mt-3 pb-3 border-bottom border-white border-3 ">
        <div className="text-center">
          <a
            href="https://github.com/EetuK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-responsive link_logo"
              src={github}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/eetu-koskelainen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-responsive link_logo"
              src={linkedin}
              alt="linkedin"
            />
          </a>
        </div>
      </nav>
    );
  }
}
export default Links;
