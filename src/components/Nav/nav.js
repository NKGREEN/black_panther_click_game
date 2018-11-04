import React from "react";
import NavDashboard from "../NavDashboard";
import "./nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
       <img src="/assets/images/panther_nav.png" alt="panther" id="navImg"/>
      </li>
      <NavDashboard score={props.score} topScore={props.topScore} />
      <li>
      Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;