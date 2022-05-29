import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = ({ parent }) => {
  let { id } = useParams();
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1);
    // () => {
    // };
  };
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <ul>
        <li key={parent.id}>
          <div>
            <img src={parent[id].pic} />
            {/* <span>{moreInfo[idx].email}</span> */}
          </div>
            <img src={parent[id].random} />
          {/* <img
                  src={
                    idx % 3 == 0
                      ? `https://placeimg.com/300/300/nature/${idx}`
                      : idx % 2 == 0
                      ? `https://placeimg.com/300/300/animals/${idx}`
                      : `https://placeimg.com/300/300/arch/${idx}`
                  }
                /> */}
          <div>
            {/* <span>{moreInfo[idx].email}</span> */}
            <span>{parent[id].title}</span>
            <h1>현재 파라미터는 {id}</h1>
            {/* <p>{lk}</p> */}
          </div>
          {/* <p>{moreInfo[idx].write}</p> */}
        </li>
      </ul>
    </div>
  );
};

export default PostDetail;
