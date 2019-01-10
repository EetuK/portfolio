import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

class Logo extends Component {
  render() {
    return (
      <div className="row bg-dark pb-1 border-bottom border-white border-3">
        <div className="col text-center justify-content-center">
          <Link className="link" to="/">
            {/*<img className="img-fluid" src={logo} alt="Eetu Koskelainen" />*/}
            <h1 className="logoheader">Eetu Koskelainen</h1>
          </Link>
        </div>
      </div>
    );
  }
}
export default Logo;
