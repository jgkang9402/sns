import React from "react";
import { Navigate } from "react-router-dom";
import AddPost from "../pages/AddPost";

const PrivateAdd = ({ login }) => {
  return login === true ? <AddPost /> : <Navigate to="/login" />;
};

export default PrivateAdd;
