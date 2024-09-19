import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./Modal.css"
export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div onClick={onClose} className='container-modal'>
      <div onClick={(e) => e.stopPropagation()} className='modals'>
       lorem100
      </div>
    </div>,
    document.body
  );
};





