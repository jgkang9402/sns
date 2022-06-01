import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = ({ parent, parent2 }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <span className="go-back" onClick={goBack}>🔙</span>
      <ul>
        <li key={parent.id}>
          <div>
            <img src={parent[id].pic} />
            <span>{parent2[id].email}</span>
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
            <div>
              <span>{parent2[id].email}</span>
              <span>{parent[id].title}</span>
              <p>좋아요{parent[id].like}</p>
            </div>
            <p>{parent2[id].write}</p>

            {/* <p>{lk}</p> */}
          </div>
          {/* <p>{moreInfo[idx].write}</p> */}
        </li>
      </ul>
    </div>
  );
};

export default PostDetail;
