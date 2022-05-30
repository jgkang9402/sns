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
}) => {
  const navigate = useNavigate();
  const [addPost, setAddPost] = useState([]);
  const [addPost2, setAddPost2] = useState([]);
  const [uploadImg, setUploadImg] = useState("");

  console.log(addPost);
  console.log(addPost2);

  // const {title,random} = addPost
  const titleAdding = useRef();
  const picAdding = useRef();
  const writeAdding = useRef();

  const picUpdate = (e) => {
    // console.log(123);
    // console.log(e);
    // console.log(e.target.files[0]);
    let url = URL.createObjectURL(e.target.files[0]);
    setUploadImg(url);
  };

  const addPostFunc = (e) => {
    setAddPost({
      heart: false,
      id: -1,
      like: 0,
      pic: "https://placeimg.com/100/100/people/100",
      title: titleAdding.current.value,
      random: uploadImg,
    });
    setAddPost2({
      id: -1,
      email: "email임",
      write: writeAdding.current.value,
    });
    // check()
    // let copy = addPost;
    // let copy2 = addPost2;
    // setCreate(copy);
    // setCreate2(copy2);
    // navigate("/");
  };

  const check = () => {
    // console.log(create);
    // console.log(addPost);
    // addPostFunc();

    let copy = addPost;
    let copy2 = addPost2;
    setCreate(copy);
    setCreate2(copy2);
    navigate("/");
  };
  useEffect(() => {
    console.log('이떄실행');
    if(addPost.hasOwnProperty("random")){
      check()
    }
  }, [addPost]);

  return (
    <div>
      <div>
        <h2>로그인된 이메일</h2>
        <input onChange={picUpdate} ref={picAdding} id="file" type="file"  />
        <input
          ref={titleAdding}
          className="ddd"
          type="text"
          placeholder="글제목입력(title)"
        />
        <textarea ref={writeAdding} type="text" placeholder="본문입력(wirte)" />
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
