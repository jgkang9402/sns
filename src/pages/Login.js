import React,{ useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setLogin, userId, setUserId }) => {
  const inputId = useRef();
  const inputPw = useRef();
  const navigate = useNavigate();
  const [inputErrorMsg, setInputErrorMsg] = useState("");
  const loginUser = (e) => {
    if(inputId.current.value===""){
      setInputErrorMsg("이메일을 입력해주세요.");
      inputId.current.focus();
      return;
    }
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (
      inputId.current.value.match(regExp) == null ||
      !inputId.current.value.includes(".")
    ) {
      e.preventDefault();
      setInputErrorMsg("이메일을 형식을 확인해 주세요.");
      inputId.current.focus();
      return;
    }
    if (inputPw.current.value.length <= 4) {
      e.preventDefault();
      setInputErrorMsg("비밀번호는 5자리이상입니다");
      inputPw.current.focus();
      return;
    }
    setUserId(inputId.current.value);

    setLogin(true);
    navigate("/");
  };

  const showPw = () => {
    const imobtn = document.querySelector(".pw-box button");
    if (imobtn.innerText == "❌") {
      imobtn.innerText = "🧐";
      inputPw.current.setAttribute("type", "password");
      return;
    }
    imobtn.innerText = "❌";
    inputPw.current.setAttribute("type", "text");
  };

  return (
    <div>
      <div className="form-wrapper" id="wrapper-login">
        {/* <img src="https://i.imgur.com/iqskGqe.jpg" alt="bg1" /> */}
        <form className="form-login">
          <span>아이디 : </span>
          <input
            ref={inputId}
            type="text"
            placeholder="Username"
            className="input-username"
            id="input-username"
            // autocomplete="off"
          />
          {/* <p className="error_txt">???</p> */}
          <div className="pw-box">
            <span>비밀번호 : </span>
            <input
              ref={inputPw}
              type="password"
              placeholder="Password"
              className="input-password"
              id="input-password"
              // autocomplete="off"
            />
            <button type="button" onClick={showPw}>
              🧐
            </button>
          </div>
          <p className="error_txt">{inputErrorMsg}</p>
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
