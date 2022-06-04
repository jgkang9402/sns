import React from "react";
import { Navigate } from "react-router-dom";
import PostDetail from "../pages/PostDetail";

const PrivateRoute = ({
  login,
  allData,
  setAllData,
}) => {
  return login == true ? (
    <PostDetail
      allData={allData}
      setAllData={setAllData}
    />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
