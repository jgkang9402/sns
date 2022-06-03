import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PostAll from "./pages/PostAll";
import PrivateAdd from "./route/PrivateAdd";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  // const [login, setLogin] = useState(false);
  // const [userId, setUserId] = useState("");
  const [login, setLogin] = useState(true);
  const [userId, setUserId] = useState("abc123@naver.com");
  const [parent, setParent] = useState([]);
  const [parent2, setParent2] = useState([]);
  const [moreNum, setMoreNum] = useState(10);
  const [scrollMove, setScrollMove] = useState(0);
  const [create, setCreate] = useState([]);
  const [create2, setCreate2] = useState([]);
  const morescr = useRef(0);
  const [apiData, setApiData] = useState([])
  const [apiData2, setApiData2] = useState([])


  const moveToPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollReturn = () => {
    window.scrollTo({
      top: scrollMove,
      behavior: "auto",
    });
  };
  useEffect(() => {
    // console.log(morescr.current);
    if(parent.length==parent2.length){
      return
    }
    if (morescr.current === parent.length) {
      morescr.current = parent.length;
      scrollReturn();
    } else if (parent.length > morescr.current) {
      // console.log("제발");
      morescr.current = parent.length;
    } else {
      // console.log("여기냐");
      scrollReturn();
    }
    // setParent(parent)
    // setParent2(parent2)
  }, [parent]);
  useEffect(()=>{
    // setParent(parent.concat(create))
    // setParent(parent2.concat(create2))
    // console.log("앱",create);
  },[create])
  useEffect(()=>{
    // setParent(parent.concat(create))
    // setParent(parent2.concat(create2))
    // console.log("앱",create);
    console.log("여기냐");
    // setParent(apiData)
    // setParent2(apiData2)
    let arr = apiData.slice(0,moreNum)
    let arr2 = apiData2.slice(0,moreNum)
    console.log(arr);
    setParent(arr)
    setParent2(arr2)

    // console.log(apiData);
    
  },[apiData])

  const getMoreData = () => {
    setMoreNum(moreNum + 10);
    window.scrollTo({
      top: window.scrollY,
      behavior: "auto",
    });
  };
  
  useEffect(() => {
    // getData();
    // getMoreData()
    console.log(moreNum);
    if(parent.length!=moreNum){
      // getMoreData()
    }else{
      console.log(parent.length);
      console.log(moreNum);
    }
    console.log(parent);
  }, [moreNum]);

  console.log(parent);
  // console.log(parent2);
  // console.log(moreNum);
  // console.log("크리에이트",create);
  // console.log(apiData);

  return (
    <div className="App">
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route
          path="/"
          element={
            <PostAll
              parent={parent}
              setParent={setParent}
              parent2={parent2}
              setParent2={setParent2}
              moreNum={moreNum}
              setMoreNum={setMoreNum}
              setScrollMove={setScrollMove}
              create={create}
              setCreate={setCreate}
              create2={create2}
              setCreate2={setCreate2}
              apiData={apiData}
              setApiData={setApiData}
              apiData2={apiData2}
              setApiData2={setApiData2}
            />
          }
        />
        <Route
          path="/post/:id"
          element={
            <PrivateRoute
              login={login}
              setLogin={setLogin}
              parent={parent}
              parent2={parent2}
              setParent={setParent}
              setParent2={setParent2}
            />
          }
        />
        {/* <Route
          path="/post/:id"
          element={<PostDetail login={login} parent={parent} parent2={parent2} />}
        /> */}
        <Route
          path="/login"
          element={
            <Login
              login={login}
              setLogin={setLogin}
              userId={userId}
              setUserId={setUserId}
            />
          }
        />
        <Route
          path="/addpost"
          element={
            <PrivateAdd
              login={login}
              setLogin={setLogin}
              parent={parent}
              parent2={parent2}
              setParent={setParent}
              setParent2={setParent2}
              create={create}
              setCreate={setCreate}
              create2={create2}
              setCreate2={setCreate2}
              userId={userId}
            />
          }
        />
      </Routes>
      <button className="tothetop" onClick={moveToPage}>
        ↑
      </button>
    </div>
  );
}

export default App;

/* 
            albumId: 1
            id: 2
            thumbnailUrl: "https://via.placeholder.com/150/771796"
            title: "reprehenderit est deserunt velit ipsam"
            url: "https://via.placeholder.com/600/771796"
          */
/*
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        email: "Lew@alysha.tv"
        id: 4
        name: "alias odio sit"
        postId: 1
      */
