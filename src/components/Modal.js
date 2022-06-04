import React from "react";

const Modal = (props) => {
  return (
    <div className="modal_box">
      <h2>{props.msg}</h2>
      <button className="close_btn" onClick={props.closeModal}>
        ❌
      </button>
    </div>
  );
};

export default Modal;
