import { MouseEvent, useMemo, useRef } from 'react';

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
  onClose,
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
    onClose ? onClose() : null;
  };

  useMemo(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          className={classNames(styleClass, classes.modal)}
          onAfterClose={() => {
            onClose ? onClose() : null;
          }}
        >
          <motion.div
            key="modal"
            initial={{
              backgroundColor: '#00000000',
              backdropFilter: 'blur(0px)',
            }}
            animate={{
              backgroundColor: '#00000099',
              backdropFilter: 'blur(20px)',
            }}
            exit={{
              backgroundColor: '#00000000',
              backdropFilter: 'blur(0px)',
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={classes.modalClose}
            onClick={(e) => {
              closeModal(e);
            }}
            ref={modalRef}
          ></motion.div>
          <div className={classes.modalInner}>{children}</div>
        </Modal>
      )}
    </AnimatePresence>
  );
};
