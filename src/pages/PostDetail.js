import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = ({ parent, parent2, setParent, setParent2 }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const likeToggle = (e) => {
    // parent.id.like
    // console.log(e.target.innerText);
    console.log(parent[id].heart);
    if (parent[id].heart) {
      e.target.innerText = "Like 0";
      let copyarr = [...parent];
      copyarr[id].heart = false;
      console.log(copyarr);
      console.log("하트",parent[id].heart);
      setParent(copyarr)

      // setParent(copyarr);

      // console.log(parent[id].like);
    } else {
      e.target.innerText = "Like 1";
      let copyarr = [...parent];
      copyarr[id].heart = true;
      console.log(copyarr);
      console.log("하트",parent[id].heart);
      setParent(copyarr)
      // console.log(parent[id].like);
    }
    // parent[id].heart==false?parent[id].like="Like 🤍":
  };
  return (
    <div>
      <div className="detail_wrap_box">
        <span className="go-back" onClick={goBack}>
          🔙
        </span>
        <div className="detail_first_box">
          <img className="user_img" src={parent[id].pic} />
          <span>{parent2[id].email}</span>
        </div>
        <img className="post_img" src={parent[id].random} />
        <div>
          <div>
            <span>Writer : {parent2[id].email}</span>
            <br />
            <span>Title : {parent[id].title}</span><br />
            <p className="like_btn" onClick={likeToggle}>
              {parent[id].like}
            </p>
          </div>
          <p>{parent2[id].write}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
