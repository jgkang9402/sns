import React from "react";
import { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogin, userId, setUserId }) => {
  const inputId = useRef();
  const inputPw = useRef();
  const navigate = useNavigate();
  const loginUser = (e) => {
    if (inputId.current.value == "" || inputPw.current.value == "") {
      e.preventDefault();
      console.log(123);
      return;
    }

    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (
      inputId.current.value.match(regExp) == null ||
      !inputId.current.value.includes(".")
    ) {
      e.preventDefault();
      console.log("틀림");
      return;
    }
    setUserId(inputId.current.value)

    setLogin(true);
    navigate("/");
  };
  return (
    <div>
      <div className="form-wrapper" id="wrapper-login">
        {/* <img src="https://i.imgur.com/iqskGqe.jpg" alt="bg1" /> */}
        <form className="form-login">
          <input
            ref={inputId}
            type="text"
            placeholder="Username"
            className="input-username"
            id="input-username"
            // autocomplete="off"
          />
          <p className="error_txt">???</p>
          <div className="pw-box">
            <input
              ref={inputPw}
              type="password"
              placeholder="Password"
              className="input-password"
              id="input-password"
              // autocomplete="off"
            />
          </div>
          <p className="error_txt">??</p>
          <div className="custum-checkbox">
            <input type="checkbox" id="id_save" />
            <label htmlFor="id_save">아이디 저장</label>
          </div>
          <button onClick={loginUser} type="button" className="btn-login">
            LOGIN
          </button>
        </form>
        <p>
          No account? <a href="#wrapper-signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
