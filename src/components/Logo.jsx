import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import logo from "../images/eetukoskelainen-white.png";

class Logo extends Component {
  render() {
    return (
      <div className="row bg-dark pb-1 border-bottom border-white border-3">
        <div className="col text-center justify-content-center">
          <Link to="/">
            <img className="img-fluid" src={logo} alt="Eetu Koskelainen" />
          </Link>
        </div>
      </div>
    );
  }
}
export default Logo;
