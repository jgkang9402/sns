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
  // const [post, setPost] = useState([]);
  // const [moreInfo, setMoreInfo] = useState([]);
  // let [lk, setlk] = useState("Like 🤍");
  // const [likeToggle, setLikeToggle] = useState(false);
  // const [moreNum, setMoreNum] = useState(10);
  const selectPost = useRef();
  const [modalToggle, setmodalToggle] = useState(false);

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
        // setMoreInfo(moreInfoList)
      })
      .catch((error) => {
        console.log(error);
        alert("error");
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
          let newArr = create.concat(sliceList);
          setParent(newArr);
          return;
        }
        // setPost(sliceList);
        setParent(sliceList);
        // setPost(sliceList)
      })
      .catch((error) => {
        console.log(error);
        alert("error");
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
    // setParent(parent);
    // setParent2(parent2);
    console.log("포스트데이타");
  };

  const rememberScroll = () => {
    setScrollMove(Math.floor(window.scrollY));
  };

  const removePost = (e, idx) => {
    idx = e.target.className;
    if (parent[idx].deleteAbailable === true) {
      let slicearr1 = create.splice(idx, 1);
      let slicearr2 = create2.splice(idx, 1);
      console.log(slicearr1);
      let foo1 = parent.splice(idx, 1);
      let foo2 = parent2.splice(idx, 1);
      console.log(foo1);
      // splice된게 변수에 담아짐
      let copy1 = [...parent];
      let copy2 = [...parent2];
      console.log(copy1);
      setParent(copy1);
      setParent2(copy2);
      console.log("포스트올", create);
      return;
    } else {
      closeModal();
    }
  };

  useEffect(() => {
    console.log("getdata또실행?");
    getData();
    console.log(parent);
  }, [moreNum]);

  useEffect(() => {
    postdata();
    console.log(parent);
    // console.log(parent2);
  }, [parent]);
  const closeModal = (e) => {
    const modalBox = document.querySelector(".modal_box");
    if (modalToggle == false) {
      modalBox.classList.add("modalChange");
      setmodalToggle(true);
    } else {
      modalBox.classList.remove("modalChange");
      setmodalToggle(false);
    }
  };

  let redHeart = true
  const testclass = (e)=>{
    e.stopPropagation()
    console.log(e.target);
    
    if(redHeart==true){
      e.target.classList.add('red')
      redHeart = false
    }else{
      e.target.classList.remove('red')
      redHeart = true

    }
  }

  return (
    <main>
      <div className="ab">
        <Modal
          msg={"타인의 게시물은 지울 수 없습니다."}
          closeModal={closeModal}
        />
        <ol className="wrap_box">
          {parent.map((item, idx) => {
            return (
              <li className='odd' key={item.id} ref={selectPost}>
                {/* <li className={`odd ${item.id}`} key={item.id} ref={selectPost}> */}
                {/* <p onClick={testclass}>테스트 : {item.like}</p> */}
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
                    <h4>{parent2[idx].email}</h4>
                    {/* <h4>
                      {parent2[idx].email == "" ? "이메일" : parent2[idx].email}
                    </h4> */}
                    <img src={item.pic} />
                  </div>
                  <p
                    className="like_btn"
                    onClick={(e) => {
                      console.log(idx);
                      if (item.heart) {
                        // !item.heart);
                        e.target.innerText = "Like 🤍";
                        let copyarr = [...parent];
                        copyarr[idx].heart = false;
                        copyarr[idx].like = "Like 🤍";
                        // console.log(copyarr);
                        console.log("하트", parent[idx].heart);
                        setParent(copyarr);
                      } else {
                        // true);
                        e.target.innerText = "Like ❤";
                        let copyarr = [...parent];
                        copyarr[idx].heart = true;
                        copyarr[idx].like = "Like ❤";
                        // console.log(copyarr);
                        console.log("하트", parent[idx].heart);
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
      </div>
    </main>
  );
};

//   return (
//     <main>
//       <div className="ab">
//         <Modal  msg={"타인의 게시물은 지울 수 없습니다."} closeModal={closeModal}/>
//         <ol className="wrap_box">
//           {post.map((item, idx) => {
//             return (
//               <li className="odd" key={item.id} ref={selectPost}>
//                 <div className="inner">
//                   <div className="first_box">
//                     <p
//                       className={idx}
//                       style={{
//                         display: "inline-block",
//                         marginBottom: "20px",
//                         cursor: "pointer",
//                       }}
//                       onClick={removePost}
//                     >
//                       ❌
//                     </p>
//                     <h4>{moreInfo[idx].email}</h4>
//                     <img src={item.pic} />
//                   </div>
//                   <p
//                     className="like_btn"
//                     onClick={(e) => {
//                       console.log(idx);
//                       if (item.heart) {
//                         // !item.heart);
//                         e.target.innerText = "Like 🤍";
//                         item.heart = false;
//                         console.log(item.heart);
//                         console.log("??");
//                         setParent(post)
//                         // setlk(lk="Like ❤");
//                       } else {
//                         // true);
//                         e.target.innerText = "Like ❤";
//                         item.heart = true;
//                         // setPost(post[idx].heart=true)
//                         console.log(item.heart);
//                         console.log("!!");
//                         setParent(post)
//                         // setlk(lk="Like 🤍")
//                       }
//                     }}
//                   >
//                     {item.like}
//                   </p>
//                   <Link to={`/post/${idx}`} onClick={rememberScroll}>
//                     <img className="post_img" src={item.random} />
//                   </Link>

//                   {/* <div className="second_box">
//                       <span>{moreInfo[idx].email}</span>
//                       <br />
//                       <span>{item.title}</span>
//                       <p>좋아요{item.like}</p>
//                     </div>
//                     <p>{moreInfo[idx].write}</p> */}
//                 </div>
//               </li>
//             );
//           })}
//         </ol>
//         <div className="box_more">
//           <button className="more_button" onClick={getMoreData}>
//             더보기
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// };
//
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
