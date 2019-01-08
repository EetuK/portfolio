import React, { Component } from "react";
import CvData from "../cv.json";

const Experience = props => (
  <div>
    <div className="card-header">
      <h4>Experience</h4>
    </div>
    <div className="card-body">
      {props.experience.map((exp, i) => {
        return (
          <div key={i}>
            <h5 className="card-title">{exp.company + ",  " + exp.date}</h5>
            <p>{exp.title}</p>
            <ul className="card-text">
              {exp.details.map((detail, i) => {
                return <li key={i}>{detail}</li>;
              })}
            </ul>
            <hr />
          </div>
        );
      })}
    </div>
  </div>
);

class Cv extends Component {
  constructor(props) {
    super();
    this.state = { experienceOpen: false, educationOpen: false };
  }

  render() {
    return (
      <div>
        <div className="card m-2">
          <Experience experience={CvData.experience} open={this.toggleOpen} />
        </div>
        <div className="card m-2">
          <div className="card-header">Education</div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cv;
