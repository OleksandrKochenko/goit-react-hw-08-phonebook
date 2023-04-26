import { createPortal } from 'react-dom';
import css from './LoaderModal.module.css';
import { Spiner } from './LoaderSpiner';

const modalRoot = document.querySelector('#root-modal');

export const Loader = () => {
  return createPortal(
    <div className={css.overlay}>
      <Spiner />
    </div>,
    modalRoot
  );
};
