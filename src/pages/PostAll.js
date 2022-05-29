import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import PostDetail from "./PostDetail";

const PostAll = ({ setParent, moreNum, setMoreNum }) => {
  const [post, setPost] = useState([]);
  const [moreInfo, setMoreInfo] = useState([]);
  // const [moreNum, setMoreNum] = useState(10);
  const [lk, setlk] = useState([]);
  const randompic = ["nature", "animals", "arch"];

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      // console.log(res.data);

      const moreInfo = res.data.slice(0, moreNum).map((item, i) => {
        return {
          email: item.email,
          write: item.body,
        };
      });
      // console.log(moreInfo);
      setMoreInfo(moreInfo);
    });
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      // console.log(res.data);
      let sliceList = res.data.slice(0, moreNum).map((item, idx) => {
        return {
          id: item.id,
          title: item.title,
          photo: item.thumbnailUrl,
          heart: false,
          like: Math.floor(Math.random() * 20),
          pic: `https://placeimg.com/100/100/people/${idx}`,
          random: `https://placeimg.com/300/300/${
            randompic[idx % 3 == 0 ? 0 : idx % 2 == 0 ? 1 : 2]
          }/${idx}`,
          // like2: setlk(post[idx].like)
        };
      });
      // console.log(sliceList);
      setPost(sliceList);
      // getMoreData(res.data);
    });
  };

  const getMoreData = () => {
    setMoreNum(moreNum + 10);
  };

  useEffect(() => {
    getData();
    // return setLike(Math.floor(Math.random() * 20));
  }, [moreNum]);

  useEffect(() => {
    // setlk(post.like)
    // console.log(post.like);
    // console.log(lk);
  }, [post.like]);
  // console.log(post);
  setParent(post);

  return (
    <div>
      <div className="ab">
        <ol>
          {post.map((item, idx) => {
            return (
              <li key={item.id}>
                {/* <Route></Route> */}
                <Link to={`/post/${idx}`}>
                  {/* <Route path="/post/" element={<PostDetail post={post} />} /> */}
                  {/* <Link to="/signup">회원가입</Link> */}
                  {/* <Link to={`/post/${idx}`} element={<PostDetail />}> */}
                  <div>
                    <img src={item.pic} />
                    <span>{moreInfo[idx].email}</span>
                  </div>
                  {/* <img
                    src={
                      idx % 3 == 0
                        ? `https://placeimg.com/300/300/nature/${idx}`
                        : idx % 2 == 0
                        ? `https://placeimg.com/300/300/animals/${idx}`
                        : `https://placeimg.com/300/300/arch/${idx}`
                    }
                  /> */}
                  <img src={item.random}/>
                  <div>
                    <span>{moreInfo[idx].email}</span>
                    <span>{item.title}</span>
                    <p>{lk}</p>
                  </div>
                  <p>{moreInfo[idx].write}</p>
                </Link>
              </li>
            );
          })}
          <button onClick={getMoreData}>더보기</button>
        </ol>
      </div>
    </div>
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
