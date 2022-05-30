import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* 
    기능
    1. api따오기
    2. private기능
    3. 포스트추가하기
    4. 포스트제거하기
    5. 포스트 수정하기
    6. 마크업
    7. 로그인기능
    8. 디테일페이지
    9. 댓글기능
  */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
