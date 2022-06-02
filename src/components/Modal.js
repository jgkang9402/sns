import React from 'react'

const Modal = (props) => {
  // const closeModal = ()=>{

  // }
  return (
    <div className='modal_box'>
      <h2>{props.msg}</h2>
      <button onClick={props.closeModal}>닫기</button>
    </div>
  )
}

export default Modal