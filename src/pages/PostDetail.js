import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = ({ allData, setAllData, setRememberData }) => {
  let { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
    setRememberData(allData);
  };

  const likeToggle = (e) => {
    e.target.innerText = "Like ❤";

    // console.log(allData[id].heart);
    if (!allData[id].heart) {
      let copyarr = [...allData];
      copyarr[id].heart = true;
      setAllData(copyarr);
      // console.log(copyarr);
      // console.log("하트", allData[id].heart);
      // setParent(copyarr);
    } else {
      e.target.innerText = "Like 🤍";
      let copyarr = [...allData];
      copyarr[id].heart = false;
      setAllData(copyarr);
      // console.log(copyarr);
      // console.log("하트", allData[id].heart);
      // console.log(parent[id].like);
    }
  };
  return (
    <div className="detail_top">
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
            <p className="detail_like_btn" onClick={likeToggle}>
              {allData[id].like ? allData[id].like : !allData[id].like}
            </p>
          </div>
          <p>{allData[id].write}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
