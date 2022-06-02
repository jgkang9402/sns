import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = ({
  parent,
  parent2,
  setParent,
  setParent2,
  create,
  setCreate,
  create2,
  setCreate2,
  userId,
}) => {
  const navigate = useNavigate();
  const [addPost, setAddPost] = useState([]);
  const [addPost2, setAddPost2] = useState([]);
  const [uploadImg, setUploadImg] = useState("");
  let [count, setCount] = useState(-1);
  const titleAdding = useRef();
  const picAdding = useRef();
  const writeAdding = useRef();

  const picUpdate = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setUploadImg(url);
  };

  const addPostFunc = () => {
    setAddPost([
      // ...copy1,
      {
        id: -Math.floor(Math.random() * 100),
        heart: false,
        like: "Like 🤍",
        pic: "https://placeimg.com/100/100/people/100",
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
    if (addPost.length !== 0) {
      check();
    }
  }, [addPost]);

  return (
    <div>
      <div>
        <h2>유저 이메일: {userId}</h2>
        <input
          ref={titleAdding}
          className="ddd"
          type="text"
          placeholder="글제목입력(title)"
        />
        <br />
        <textarea ref={writeAdding} type="text" placeholder="본문입력(wirte)" />
        <br />
        <input onChange={picUpdate} ref={picAdding} id="file" type="file" />
        <div>
          <button onClick={addPostFunc}>저장</button>
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
