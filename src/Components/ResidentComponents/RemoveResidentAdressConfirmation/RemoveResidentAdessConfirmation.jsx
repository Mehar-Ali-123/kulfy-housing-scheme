import React from 'react';

function RemoveResidentAddressConfirmation({ isOpen, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <div className="modal-overlay" style={modalOverlayStyle}>
      <div className="modal" style={modalStyle}>
        <h2>Confirmation</h2>
        <p>Are you sure you want to remove this resident address?</p>
        <div className="modal-buttons" style={modalButtonStyle}>
          <button className="btn btn-danger" onClick={handleConfirm}>Yes</button>
          <button className="btn btn-secondary" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
}

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999, // Ensure the modal is on top
};

const modalStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  width: '400px', // You can adjust the width as needed
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
};

const modalButtonStyle = {
  textAlign: 'center', // Center-align the buttons
  marginTop: '20px', // Add some margin to separate buttons from content
};

export default RemoveResidentAddressConfirmation;