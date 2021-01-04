const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal show-modal' : 'modal hide-modal';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button
          className='wide-btn'
          type='button'
          onClick={(e) => handleClose(false)}
        >
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
