import React from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({login,setLogin}) => {
  const LoginToggle = ()=>{
    if(login){
      setLogin(!login)
    }else{
      setLogin(false)
    }
  }
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <nav>
        <Link to="/addpost"><button>포스트추가</button></Link>
        <FontAwesomeIcon icon={faUser} />
        <Link to="/login"><button onClick={LoginToggle}>{login?"Logout":"Login"}</button></Link>
      </nav>
    </div>
  );
};

export default Navbar;
