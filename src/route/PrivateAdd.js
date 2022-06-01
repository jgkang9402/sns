import React from "react";
import { Navigate } from "react-router-dom";
import AddPost from "../pages/AddPost";

const PrivateAdd = ({
  login,
  parent,
  parent2,
  setLogin,
  setParent,
  setParent2,
  create,
  setCreate,
  create2,
  setCreate2,
  userId,
}) => {
  return login == true ? (
    <AddPost
      userId={userId}
      create={create}
      setCreate={setCreate}
      create2={create2}
      setCreate2={setCreate2}
      parent={parent}
      setParent={setParent}
      parent2={parent2}
      setParent2={setParent2}
    />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateAdd;
