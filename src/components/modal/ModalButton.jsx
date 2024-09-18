import React, { useState } from 'react';
import { Modal } from './Modal';
import "./ModalButton.css";
import Icons from "../../assets/icons/Group.svg"

export const ModalButton = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  
    return (
    <header className='modal_header'>
        <h1>ReactMeals</h1>
          <div>
        <button onClick={openModal} className='modal-opening'><img src={Icons}/>Your Cart <span>7</span></button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </header>
    );
  };
  
 export default ModalButton;