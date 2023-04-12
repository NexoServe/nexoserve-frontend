import { MouseEvent, useRef } from 'react';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from 'react-modal';

import useStyles from './css';
import { IModal } from './types';

export const ModalPopUp = ({
  showModal,
  setShowModal,
  children,
  styleClass,
}: IModal) => {
  const classes = useStyles();
  Modal.setAppElement('#__next');

  const modalRef = useRef<HTMLInputElement | null>(null);

  const closeModal = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ): void => {
    e.preventDefault();

    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className={classNames(styleClass, classes.modal)}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className={classes.modalClose}
          onClick={closeModal}
          ref={modalRef}
        ></motion.div>
        <div className={classes.modalInner}>{children}</div>
      </Modal>
    </AnimatePresence>
  );
};
