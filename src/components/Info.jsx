import React, { Component } from "react";
import "./Info.css";
import eetu from "../images/eetu.png";

class Logo extends Component {
  render() {
    return (
      <div className="row justify-content-center text-center bg-dark mt-4 pb-1 border-bottom border-white border-3">
        <div className="col">
          <img
            className="img-responsive info_img py-4"
            src={eetu}
            alt="Eetu Koskelainen"
          />
          <br />
        </div>
        <div className="col text-white p-5">
          <div className="text-left">
            <h1>Eetu Koskelainen</h1>
            <p>
              {" "}
              I'm 22 years old ICT-engineer student in Tampere University of
              Applied Sciences. I'm also Electronics Assembler by profession. My
              interests are Web-development, Embedded Systems and basically
              everything involved with creativity and programming.
            </p>
            <h5>
              e.o.koskelainen[at]gmail.com
              <br />
              0456300966
            </h5>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Logo;
