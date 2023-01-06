import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import useStyles from './css';
import { IModal } from './types';

export const Modal = ({ showModal, setShowModal, children }: IModal) => {
  const classes = useStyles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const modalRef = useRef<HTMLInputElement | null>(null);

  const closeModal = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ): void => {
    e.preventDefault();

    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return mounted
    ? createPortal(
        <>
          {showModal ? (
            <div className={classes.modal}>
              <div
                className={classes.modalClose}
                onClick={closeModal}
                ref={modalRef}
              ></div>
              <div className={classes.modalInner}>{children}</div>
            </div>
          ) : null}
        </>,

        document.getElementById('__next') as HTMLElement,
      )
    : null;
};
