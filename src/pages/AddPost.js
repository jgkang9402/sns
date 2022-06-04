import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import myImg from "../koala.jpg";
import { Context1 } from "../App";

const AddPost = () => {
  const {
    create,
    setCreate,
    create2,
    setCreate2,
    userId,
  } = useContext(Context1);

  const navigate = useNavigate();
  const [addPost, setAddPost] = useState([]);
  const [addPost2, setAddPost2] = useState([]);
  const [uploadImg, setUploadImg] = useState("");
  const [picName, setPickName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const titleAdding = useRef();
  const picAdding = useRef();
  const writeAdding = useRef();
  const errorAdding = useRef();

  const picUpdate = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setUploadImg(url);
    setPickName(picAdding.current.value);
  };
  const addPostFunc = (e) => {
    const errorSelect = document.querySelector(".error_txt");

    if (titleAdding.current.value.length < 5) {
      titleAdding.current.focus();
      setErrorMsg("타이틀은 5글자이상 입력해주세요.");
      errorSelect.style.display = "block";
      e.preventDefault();
      return;
    }
    if (writeAdding.current.value.length < 10) {
      writeAdding.current.focus();
      setErrorMsg("본문은 10글자이상 입력해주세요");
      errorSelect.style.display = "block";
      e.preventDefault();
      return;
    }

    setAddPost([
      // ...copy1,
      {
        id: -Math.floor(Math.random() * 100),
        heart: false,
        like: "Like 🤍",
        pic: myImg,
        title: titleAdding.current.value,
        random:
          uploadImg == ""
            ? "https://via.placeholder.com/150/eaf2e1"
            : uploadImg,
        deleteAbailable: true,
      },
    ]);
    setAddPost2([
      // ...copy2,
      {
        id: -Math.floor(Math.random() * 100),
        email: userId,
        write: writeAdding.current.value,
      },
    ]);
  };

  const check = () => {
    let arr = addPost;
    let arr2 = addPost2;
    setCreate(arr.concat(create));
    setCreate2(arr2.concat(create2));

    navigate("/");
  };
  useEffect(() => {
    // if (addPost.hasOwnProperty("random")) {
    if (addPost.length != 0) {
      check();
    }
  });

  return (
    <div className="sub_top_box">
      <div className="add_wrap_box">
        <h2>User : {userId}</h2>
        <input
          ref={titleAdding}
          className="add_title"
          type="text"
          placeholder="글제목입력(Title)"
        />
        <br />
        <textarea
          ref={writeAdding}
          type="text"
          className="add_write"
          placeholder="본문입력(Wirte)"
        />
        <br />

        <p ref={errorAdding} className="error_txt">
          {errorMsg}
        </p>

        <div className="filebox">
          <input
            className="add_photo"
            onChange={picUpdate}
            ref={picAdding}
            id="file"
            type="file"
          />
          <input type="text" className="imgload" value={picName} />
          <label htmlFor="file"></label>
        </div>
        <div>
          <button className="submit_btn" onClick={addPostFunc}>
            Posting
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

/* 
heart: false
id: 16
like: 0
// photo: "https://via.placeholder.com/150/fdf73e" //안씀
pic: "https://placeimg.com/100/100/people/15"
random: "https://placeimg.com/300/300/nature/15"
title: "iusto sunt nobis quasi veritatis quas expedita 
*/

/* 
email: "Lew@alysha.tv"
write: "non et atque\noccaecati deserunt quas accusant
*/
