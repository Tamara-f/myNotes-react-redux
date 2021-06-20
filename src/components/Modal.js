import React, { useEffect } from 'react';
import '../styles/modal.css';

const Modal = ({ onClose, showModal, children }) => {
  const showHideClassName = showModal
    ? 'modal display-block'
    : 'modal display-none';

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

  return (
    <div className={showHideClassName}>
      <div className='Modal__backdrop' onClick={handleBackdropClick}>
        <section className='modal-main'>
          <button className='close' type='button' onClick={onClose}>
            <i className='far fa-window-close'></i>
          </button>
          {children}
        </section>
      </div>
    </div>
  );
};
export default Modal;
