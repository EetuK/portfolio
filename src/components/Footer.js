import React, { Component } from "react";
import ButterCMSLogo from "../images/buttercms.png";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="row text-light">
        <div className="col text-center align-middle">
          © Eetu Koskelainen 2018
        </div>
        <div className="col text-center align-middle">
          Powered by:
          <a target="_blank" href="https://buttercms.com">
            <img src={ButterCMSLogo} className="footer-logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
