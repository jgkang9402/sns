import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  setCreate,
  create2,
  setCreate2,
}) => {
  const [post, setPost] = useState([]);
  const [moreInfo, setMoreInfo] = useState([]);
  const selectPost = useRef();
  // let [lk, setlk] = useState("Like 🤍");
  const [likeToggle, setLikeToggle] = useState(false);
  const [modalToggle, setmodalToggle] = useState(false);

  const randompic = ["nature", "animals", "arch"];

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
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
        setMoreInfo(newArr);
        return;
      }
      setMoreInfo(moreInfoList);
    });
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      // console.log(res.data);
      let sliceList = res.data.slice(0, moreNum).map((item, idx) => {
        return {
          id: item.id,
          title: item.title,
          heart: false,
          like: item.like == false ? "Like ❤" : "Like 🤍",
          // like: likeToggle,
          // like: "Like 🤍",
          // like: Math.floor(Math.random() * 20),
          pic: `https://placeimg.com/100/100/people/${idx}`,
          random: `https://placeimg.com/300/300/${
            randompic[idx % 3 === 0 ? 0 : idx % 2 === 0 ? 1 : 2]
          }/${idx}`,
          deleteAbailable: false,
        };
      });
      // console.log(sliceList);
      if (create.length > 0) {
        // console.log(create);
        // console.log("+++");
        // sliceList.concat(create);
        // let newArr = sliceList.concat(create);
        let newArr = create.concat(sliceList);
        setPost(newArr);
        return;
      }
      setPost(sliceList);
    });
  };

  const getMoreData = () => {
    setMoreNum(moreNum + 10);
    window.scrollTo({
      top: window.scrollY,
      behavior: "auto",
    });
  };

  const postdata = () => {
    setParent(post);
    setParent2(moreInfo);
  };

  const rememberScroll = () => {
    setScrollMove(Math.floor(window.scrollY));
  };

  const removePost = (e, idx) => {
    // console.log(selectPost.e.current)
    // console.log(e.target.className);
    idx = e.target.className;
    // console.log(selectPost.current);
    // console.log(selectPost.key);
    // setPost(post.splice(e.target.className,1))
    // setMoreInfo(moreInfo.splice(e.target.className,1))
    // setCreate(create.splice(e.target.className,1))
    // setCreate2(create2.splice(e.target.className,1))
    // console.log(idx);
    // console.log(parent[idx]);
    if (parent[idx].deleteAbailable === true) {
      let copy1 = parent;
      let copy2 = parent2;
      let foo1 = create;
      let foo2 = create2;
      // setCreate(create.splice(idx, 1));
      // setCreate2(create2.splice(idx, 1));
      // console.log(create);
      // setParent(copy1)
      // setParent2(copy2)
      setCreate(foo1.splice(idx, 1));
      setCreate2(foo2.splice(idx, 1));
      // setParent(foo1.splice(idx, 1));
      // setParent2(foo2.splice(idx, 1));
      setParent(copy1.splice(idx, 1));
      setParent2(copy2.splice(idx, 1));
      // console.log(copy1);
      // setPost(foo1)
      // setMoreInfo(foo2)

      return;
    } else {
      closeModal()
      // alert("타인의 게시물은 지울수없습니다");
    }
    // console.log(create);
  };

  useEffect(() => {
    getData();

  }, [moreNum]);
  // }, [getMoreData()]);
  // },[post]);

  useEffect(() => {
    postdata();
  },[getData]);
  const closeModal =(e)=>{
    const modalBox = document.querySelector('.modal_box')
    if(modalToggle==false){
      modalBox.classList.add('modalChange')
      setmodalToggle(true)
    }else{
      modalBox.classList.remove('modalChange')
      setmodalToggle(false)
    }
    
  }

  return (
    <main>
      <div className="ab">
        <Modal  msg={"타인의 게시물은 지울 수 없습니다."} closeModal={closeModal}/>
        <ol className="wrap_box">
          {post.map((item, idx) => {
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
                    <h4>{moreInfo[idx].email}</h4>
                    <img src={item.pic} />
                  </div>
                  <p
                    className="like_btn"
                    onClick={(e) => {
                      console.log(idx);
                      if (item.heart) {
                        // !item.heart);
                        e.target.innerText = "Like 🤍";
                        item.heart = false;
                        console.log(item.heart);
                        console.log("??");
                        setParent(post)
                        // setlk(lk="Like ❤");
                      } else {
                        // true);
                        e.target.innerText = "Like ❤";
                        item.heart = true;
                        // setPost(post[idx].heart=true)
                        console.log(item.heart);
                        console.log("!!");
                        setParent(post)
                        // setlk(lk="Like 🤍")
                      }
                    }}
                  >
                    {item.like}
                  </p>
                  <Link to={`/post/${idx}`} onClick={rememberScroll}>
                    <img className="post_img" src={item.random} />
                  </Link>

                  {/* <div className="second_box">
                      <span>{moreInfo[idx].email}</span>
                      <br />
                      <span>{item.title}</span>
                      <p>좋아요{item.like}</p>
                    </div>
                    <p>{moreInfo[idx].write}</p> */}
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
      </div>
    </main>
  );
};

export default PostAll;

{
  /* <div className="ab">
<ul>
  {post.length == 0 ? (
    <div>abc</div>
  ) : (
    post.map((item) => {
      return (
        <li>
          <p>{item.title}</p>
          <img src={item.photo} />
          </li>
          );
        })
        )}
        </ul>
        </div> */
}

{
  {
    /* <img src={item.photo} /> */
  }
  /* <img src={`https://placeimg.com/100/100/people/${idx}`} />
                <img src={`https://placeimg.com/100/100/animals/${idx}`} />
                <img src={`https://placeimg.com/100/100/tech/${idx}`} />
                <img src={`https://placeimg.com/100/100/nature/${idx}`} />
              <img src={`https://placeimg.com/100/100/arch/${idx}`} /> */
}
