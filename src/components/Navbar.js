import React from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <nav>
        <FontAwesomeIcon icon={faUser} />
        <span>Login</span>
      </nav>
    </div>
  );
};

export default Navbar;
