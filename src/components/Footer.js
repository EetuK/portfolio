import React, { Component } from "react";
import ButterCMSLogo from "../images/buttercms.png";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="row text-light">
        <div className="col">© Eetu Koskelainen 2018</div>
        <div className="col align-middle">
          Powered by:
          <img src={ButterCMSLogo} className="footer-logo" />
        </div>
      </div>
    );
  }
}

export default Footer;
