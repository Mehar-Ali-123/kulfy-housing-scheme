import React from 'react';
import Modal from 'react-modal';
// Modal.setAppElement('#root'); // Set the root element as the app element for accessibility

const ErrorModal = ({ isOpen, onRequestClose,errorImage,errorContent}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="API Error Modal"
      className="error-modal box-shadow"
      overlayClassName="error-overlay"
    >
      <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
        <div className="error-content d-flex justify-content-center flex-column pt-0">
          <div className='d-flex justify-content-center  mb-3 m-0 p-0'>
         {errorImage}
          </div>
         {errorContent}
        </div>
        <button className="close-button radius-card p-2 px-3" onClick={onRequestClose}>
          &#10005;
        </button>
      </div>
    </Modal>
  );
};

export default ErrorModal;