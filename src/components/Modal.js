import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className='Modal__backdrop' onClick={handleBackdropClick}>
      <div className='Modal__content'>{children}</div>
    </div>,
    modalRoot
  );
};
export default Modal;
