import axios from "axios";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const PostAll = ({
  parent,
  setParent,
  parent2,
  setParent2,
  moreNum,
  setMoreNum,
  setScrollMove,
  create,
  create2,
  userId,
  login,
  allData,
  setAllData,
}) => {
  const selectPost = useRef();
  const [modalToggle, setmodalToggle] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const randompic = ["nature", "animals", "arch"];

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        // console.log(res.data);

        const moreInfoList = res.data.slice(0, moreNum).map((item, i) => {
          return {
            email: item.email,
            write: item.body,
          };
        });
        // console.log(moreInfoList);
        if (create.length > 0) {
          let newArr = create2.concat(moreInfoList);
          setParent2(newArr);
          return;
        }
        setParent2(moreInfoList);
      })
      .catch((error) => {
        // console.log(error);
        alert(error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        // console.log(res.data);
        let sliceList = res.data.slice(0, moreNum).map((item, idx) => {
          return {
            id: item.id,
            heart: false,
            like: item.heart == false ? "Like ❤" : "Like 🤍",
            title: item.title,
            pic: `https://placeimg.com/100/100/people/${idx}`,
            random: `https://placeimg.com/300/300/${
              randompic[idx % 3 === 0 ? 0 : idx % 2 === 0 ? 1 : 2]
            }/${idx}`,
            deleteAvailable: false,
          };
        });
        if (create.length > 0) {
          let newArr = create.concat(sliceList);
          setParent(newArr);
          return;
        }
        setParent(sliceList);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const getMoreData = () => {
    setMoreNum(moreNum + 10);
    window.scrollTo({
      top: window.scrollY,
      behavior: "auto",
    });
  };

  const rememberScroll = (e) => {
    setScrollMove(Math.floor(window.scrollY));
    if (login == false) {
      e.preventDefault();
      console.log(123);
      closeModal();
    }
  };

  const closeModal = (e) => {
    const modalBox = document.querySelector(".modal_box");
    if (login == false) {
      setMsg("로그인을 해주세요");
      setmodalToggle(true);
      modalBox.classList.add("modalChange");
      if (modalToggle == true) {
        modalBox.classList.remove("modalChange");
        setmodalToggle(false);
        navigate("/login");
      }
    } else if (modalToggle == false) {
      modalBox.classList.add("modalChange");
      setmodalToggle(true);
      setMsg("타인의 게시물은 삭제 할 수 없습니다");
    } else {
      modalBox.classList.remove("modalChange");
      setmodalToggle(false);
    }
  };

  const removePost = (e, idx) => {
    idx = e.target.className;
    if (parent[idx].deleteAvailable === true || parent2[idx].email == userId) {
      let slicearr1 = create.splice(idx, 1);
      let slicearr2 = create2.splice(idx, 1);
      // console.log(slicearr1);
      let foo1 = parent.splice(idx, 1);
      let foo2 = parent2.splice(idx, 1);
      // console.log(foo1);
      // splice된게 변수에 담아짐
      let copy1 = [...parent];
      let copy2 = [...parent2];
      // console.log(copy1);
      setParent(copy1);
      setParent2(copy2);
    } else {
      closeModal();
    }
  };
  // useMemo(() => {
  //   return getData();
  // },[moreNum]);

  useEffect(() => {
    console.log("getdata또실행?");
    getData();
  }, [moreNum]);

  const moveToPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <div className="main_box">
        <Modal msg={msg} closeModal={closeModal} />
        <ol className="wrap_box">
          {allData.map((item, idx) => {
            return (
              <li className="odd" key={item.id} ref={selectPost}>
                <div className="inner">
                  <div className="first_box">
                    <p
                      className={idx}
                      style={{
                        display: "inline-block",
                        marginBottom: "20px",
                        cursor: "pointer",
                      }}
                      onClick={removePost}
                    >
                      ❌
                    </p>
                    <h4>{item.email}</h4>
                    <img className="all_user_img" src={item.pic} />
                  </div>
                  <p
                    className="like_btn"
                    onClick={(e) => {
                      console.log(idx);
                      if (item.heart) {
                        e.target.innerText = "Like 🤍";
                        let copyarr = [...allData];
                        copyarr[idx].heart = false;
                        copyarr[idx].like = "Like 🤍";
                        // console.log(copyarr);
                        // console.log("하트", parent[idx].heart);
                        // setAllData(copyarr);
                        setParent(copyarr);
                      } else {
                        // true);
                        e.target.innerText = "Like ❤";
                        let copyarr = [...allData];
                        copyarr[idx].heart = true;
                        copyarr[idx].like = "Like ❤";
                        // console.log(copyarr);
                        // console.log("하트", item.heart);
                        // setAllData(copyarr);
                        setParent(copyarr);
                      }
                    }}
                  >
                    {item.like}
                  </p>
                  <Link to={`/post/${idx}`} onClick={rememberScroll}>
                    <img className="post_img" src={item.random} />
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="box_more">
          <button className="more_button" onClick={getMoreData}>
            더보기
          </button>
        </div>
        <button className="tothetop" onClick={moveToPage}>
        🔼
        </button>
      </div>
    </main>
  );
};
export default PostAll;
