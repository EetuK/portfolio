import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

const NavItem = props => (
  <li className="nav-item">
    <Link to={props.link}>
      <h2
        className={
          props.link === props.pathname ? "nav-link active" : "nav-link"
        }
      >
        {props.name}
      </h2>
    </Link>
  </li>
);

class Navigation extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    const { pathname } = this.props.location;
    console.log(pathname);
    return (
      <div className="mt-4">
        <ul className="nav nav-pills nav-justified">
          <NavItem active={true} link="/" pathname={pathname} name="Projects" />
          <NavItem active={false} link="/cv" pathname={pathname} name="Cv" />
        </ul>
      </div>
    );
  }
}

export default withRouter(Navigation);
