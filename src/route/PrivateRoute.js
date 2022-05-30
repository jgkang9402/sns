import React from "react";
import { Navigate } from "react-router-dom";
import PostDetail from "../pages/PostDetail";

const PrivateRoute = ({ login,parent,parent2, setLogin }) => {
  return login == true ? (
    <PostDetail parent={parent} parent2={parent2} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
