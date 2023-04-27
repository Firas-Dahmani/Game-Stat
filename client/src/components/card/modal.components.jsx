import React from 'react';

const Modal = ({ showModal, closeModal, children }) => {
  return (
    <div className={`modal-wrapper ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        {children}
        <button className='btn' onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
