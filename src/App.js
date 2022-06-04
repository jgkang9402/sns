import React, { useState, useEffect, useRef, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PostAll from "./pages/PostAll";
import PrivateAdd from "./route/PrivateAdd";
import PrivateRoute from "./route/PrivateRoute";

export const Context1 = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userId, setUserId] = useState("");
  // const [login, setLogin] = useState(true);
  // const [userId, setUserId] = useState("abc123@naver.com");
  const [parent, setParent] = useState([]);
  const [parent2, setParent2] = useState([]);
  const [moreNum, setMoreNum] = useState(10);
  const [scrollMove, setScrollMove] = useState(0);
  const [create, setCreate] = useState([]);
  const [create2, setCreate2] = useState([]);
  const morescr = useRef(0);
  const [allData, setAllData] = useState([]);

  let copyAll1 = parent;
  let copyAll2 = parent2;
  let allCopyArr = [];
  for (let i = 0; i < copyAll1.length; i++) {
    allCopyArr[i] = Object.assign(copyAll2[i], copyAll1[i]);
  }
  
  const scrollReturn = () => {
    window.scrollTo({
      top: scrollMove,
      behavior: "auto",
    });
  };

  useEffect(() => {
    setAllData(allCopyArr);
    if (parent.length == parent2.length) {
      return;
    }
    if (morescr.current === allData.length) {
      morescr.current = allData.length;
      scrollReturn();
    } else if (allData.length > morescr.current) {
      // console.log("제발");
      morescr.current = allData.length;
    } else {
      // console.log("여기냐");
      scrollReturn();
    }
  }, [parent]);
  console.log(allData);

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
              userId={userId}
              login={login}
              allData={allData}
              setAllData={setAllData}
            />
          }
        />
        <Route
          path="/post/:id"
          element={
            <PrivateRoute
              login={login}
              allData={allData}
              setAllData={setAllData}
            />
          }
        />
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
            <Context1.Provider
              value={{
                login,
                create,
                setCreate,
                create2,
                setCreate2,
                userId,
              }}
            >
              <PrivateAdd login={login} />
            </Context1.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
