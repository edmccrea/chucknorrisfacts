import React from 'react';
import './Modal.scss';

const Modal = ({ joke, modalHandler }) => {
  return (
    <>
      <div className='modal-bg' onClick={modalHandler}></div>
      <div className='modal-container'>
        <p className='close-btn' onClick={modalHandler}>
          x
        </p>
        <div className='modal-content'>
          <h2 className='modal-title'>Did you know...</h2>
          <p className='joke-text'>{joke.value}</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
