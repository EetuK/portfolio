import React, { Component } from "react";
import Butter from "buttercms";
import "./Cv.css";
import Keys from "../config/keys";

const Experience = props => (
  <div>
    <div className="card-header">
      <h3>{props.title}</h3>
    </div>
    <div className="card-body">
      {props.data.map((exp, i) => {
        return (
          <div className="" key={i}>
            <div className="row justify-content-center">
              <div className="col col-sm-6 col-md-4 text-center">
                <img src={exp.logo} className="organization-logo" alt="Logo" />
              </div>
              <div className="col col-sm-6 col-md-4 text-center">
                <h4 className="card-title">
                  {exp.organization}
                  <br />
                  {exp.date}
                </h4>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-8 border-down" />
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 mt-4">
                <h5>{exp.title}</h5>
                <span dangerouslySetInnerHTML={{ __html: exp.details }} />
              </div>
            </div>

            <div className="row" />
            {i === props.data.length - 1 ? (
              <div>
                <br />
              </div>
            ) : (
              <div>
                <br />
                <hr />
                <br />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

class Cv extends Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false,
      experienceOpen: false,
      educationOpen: false
    };
  }

  componentDidMount = () => {
    const butter = Butter(Keys.butterCMSToken);
    butter.page.retrieve("*", "cv").then(resp => {
      console.log(resp);
      this.setState({
        cvData: resp.data.data,
        loaded: true
      });
    });
  };

  render() {
    const { loaded, cvData } = this.state;
    if (loaded) {
      return (
        <div>
          <div className="card m-2">
            <Experience title="Experience" data={cvData.fields.experience} />
          </div>
          <div className="card m-2">
            <Experience title="Education" data={cvData.fields.education} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="text-center">
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

export default Cv;
