import React from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ login, setLogin }) => {
  const LoginToggle = () => {
    if (login) {
      setLogin(!login);
    } else {
      setLogin(false);
    }
  };
  return (
    <div className="navbar">
      <Link className="logo_box" to="/">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Photo Library</h1>
      </Link>
      <nav>
        <Link to="/addpost">
          <button className="addpost_btn">+</button>
        </Link>
        <Link to="/login">
          <button className="login_btn" onClick={LoginToggle}>
            <FontAwesomeIcon className="login_icon" icon={faUser} />
            {login ? "Logout" : "Login"}
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
