import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PostDetail from "./PostDetail";

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
  // const [moreNum, setMoreNum] = useState(10);
  // const [scroll,setScrollMove] = useState(0)

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
      console.log(moreInfoList);
      if(create.id<0){
        console.log('===');
        moreInfoList.unshift(create2)  
      }
      setMoreInfo(moreInfoList);
      // console.log(create2);
      // if(create2==[]){
      //   console.log('??');
      // }
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
        };
      });
      console.log(sliceList);
      if(create.id<0){
        console.log('+++');
        sliceList.unshift(create)
      }
      setPost(sliceList);
      // console.log("크리에이트",create);
      // console.log("크리에이트렝쓰",typeof(create));
      // if(create==[]){
      //   console.log('??');
      // }
      // getMoreData(res.data);
    });
  };

  const getMoreData = () => {
    setMoreNum(moreNum + 10);
    // console.log(window.scrollY);
    window.scrollTo({
      top: window.scrollY,
      behavior: "auto",
    });
  };

  const postdata = () => {
    setParent(post);
    setParent2(moreInfo);
  };

  useEffect(() => {
    getData();
    // let copy = create
    // let copy2 = create2

    // return setLike(Math.floor(Math.random() * 20));
    // console.log('!!!!!!!!');
  }, [moreNum]);
  
  useEffect(() => {
    // console.log("언제움직임");
    postdata();
    // setlk(post.like)
    // console.log(post.like);
    // console.log(lk);
  });
  // console.log(post);
  
  const rememberScroll = (e) => {
    console.log(Math.floor(window.scrollY));
    // setScrollMove(window.scrollY);
    setScrollMove(Math.floor(window.scrollY));
  };
  useEffect(() => {
    console.log(create);
    // let copy = create
    // let copy2 = create2
    // setPost(post.unshift(copy))
    // setMoreInfo(moreInfo.unshift(copy2))
    // setParent(parent.unshift(create))
    // setParent2(parent2.unshift(create2))
    console.log("포스트올ㅇㅇㅇ");
    // setParent(create)
    // parent.unshift(create)
  }, []);

  console.log(parent);


  return (
    <div>
      <div className="ab">
        <ol>
          {post.map((item, idx) => {
            return (
              <li key={item.id}>
                {/* <Route></Route> */}
                <Link to={`/post/${idx}`} onClick={rememberScroll}>
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
                  <img src={item.random} />
                  <div>
                    <span>{moreInfo[idx].email}</span>
                    <span>{item.title}</span>
                    <p>좋아요{item.like}</p>
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
