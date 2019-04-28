import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom";
import logo from "./homelogo2.svg"; // relative path to image

class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="custnavbar">
        <Link to="/" className="navbar-title">
          <img src={logo} alt={logo} style={{ width: "70%", height: "auto" }} />
        </Link>

        <div className="navbar-rightitems">
          <Link to="/identify" className="navbar-item">
            IDENTIFY
          </Link>
          <Link to="/resources" className="navbar-item">
            RESOURCES
          </Link>
          <Link to="/stories" className="navbar-item">
            STORIES
          </Link>
          <Link to="/donations" className="navbar-item">
            DONATIONS
          </Link>
          <Link to="/statistics" className="navbar-item">
            STATISTICS
          </Link>
        </div>
      </div>
    );
  }
}

export default CustomNavbar;
