import React, { useContext } from 'react';
import './modal.css';
import { MdClose } from 'react-icons/md';
import { StateContext } from '../../context';

const Modal = () => {
  const { state, dispatch } = useContext(StateContext);

  return (
    state.isTrailerShow && (
      <div className="modal__container">
        <div className="modal__backdrop" />
        <div className="video__wrapper">
          <iframe
            src="https://trailer.mocaas.tv/trailer/3ea933883c31a8ebdf07e4e00e84da3c.mp4"
            style={{ width: '100%' }}></iframe>
        </div>
        <MdClose
          onClick={() => dispatch({ type: 'CLOSE_TRAILER' })}
          style={{
            color: '#fff',
            fontSize: 24,
            top: 10,
            right: 10,
            position: 'fixed',
            cursor: 'pointer',
          }}
        />
      </div>
    )
  );
};

export default Modal;
