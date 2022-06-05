import React from "react";
import { Navigate } from "react-router-dom";
import PostDetail from "../pages/PostDetail";

const PrivateRoute = ({ login, allData, setAllData, setRememberData }) => {
  return login == true ? (
    <PostDetail
      allData={allData}
      setAllData={setAllData}
      setRememberData={setRememberData}
    />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
