import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
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
        <AnimatePresence mode="wait">
          {showModal ? (
            <div className={classes.modal}>
              <motion.div
                key="modal"
                initial={{ opacity: 0, filter: 'blur(0px)' }}
                animate={{ opacity: 0.5, filter: 'blur(10px)' }}
                exit={{ opacity: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.25 }}
                className={classes.modalClose}
                onClick={closeModal}
                ref={modalRef}
              ></motion.div>
              <div className={classes.modalInner}>{children}</div>
            </div>
          ) : null}
        </AnimatePresence>,

        document.getElementById('__next') as HTMLElement,
      )
    : null;
};
