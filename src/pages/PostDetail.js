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
      <span className="go-back" onClick={goBack}>
        🔙
      </span>
      <ul>
        <li key={parent.id}>
          <div>
            <img src={parent[id].pic} />
            <span>{parent2[id].email}</span>
          </div>
          <img src={parent[id].random} />
          <div>
            <div>
              <span>{parent2[id].email}</span>
              <span>{parent[id].title}</span>
              <p>좋아요{parent[id].like}</p>
            </div>
            <p>{parent2[id].write}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PostDetail;
