import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PostAll from "./pages/PostAll";
import PostDetail from "./pages/PostDetail";

function App() {
  const [login, setLogin] = useState(false);
  const [parent, setParent] = useState([]);
  const [parent2, setParent2] = useState([]);
  const [moreNum, setMoreNum] = useState(10);

  const moveToPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log(parent);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PostAll
              setParent={setParent}
              setParent2={setParent2}
              moreNum={moreNum}
              setMoreNum={setMoreNum}
            />
          }
        ></Route>
        <Route
          path="/post/:id"
          element={<PostDetail parent={parent} parent2={parent2} />}
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
