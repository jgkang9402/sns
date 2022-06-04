import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = ({
  allData,
  setAllData,
}) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const likeToggle = (e) => {
    // parent.id.like
    // console.log(e.target.innerText);
    console.log(allData[id].heart);
    if (!allData[id].heart) {
      e.target.innerText = "Like 🤍";
      let copyarr = [...allData];
      copyarr[id].heart = false;
      console.log(copyarr);
      console.log("하트", allData[id].heart);
      setAllData(copyarr);
      // setParent(copyarr);
    } else {
      e.target.innerText = "Like ❤";
      let copyarr = [...allData];
      copyarr[id].heart = true;
      console.log(copyarr);
      console.log("하트", allData[id].heart);
      setAllData(copyarr);
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
          <img className="user_img" src={allData[id].pic} />
          <span>{allData[id].email}</span>
        </div>
        <img className="post_img" src={allData[id].random} />
        <div>
          <div>
            <span>Writer : {allData[id].email}</span>
            <br />
            <span>Title : {allData[id].title}</span>
            <br />
            <p className="like_btn" onClick={likeToggle}>
              {allData[id].like?allData[id].like:!allData[id].like}
            </p>
          </div>
          <p>{allData[id].write}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
