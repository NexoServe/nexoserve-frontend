import { useEffect } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import Modal from 'react-modal';

import Draggable from '../Draggable/Draggable';

import useStyles from './css';
import { IModalPopUp } from './types';

export const ModalPopUp = ({
  showModal,
  children,
  styleClass,
  overlayClass,
  onClose,
}: IModalPopUp) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const classes = useStyles();
  Modal.setAppElement('#__next');

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => (onClose ? onClose() : null)}
      className={classNames(styleClass, classes.modal)}
      onAfterClose={() => {
        onClose ? onClose() : null;
      }}
      overlayClassName={classNames(classes.modalOverlay, overlayClass)}
    >
      {showModal && (
        <motion.div
          key="modal"
          initial={{
            backgroundColor: '#00000000',
            opacity: 0,
            backdropFilter: 'blur(0px)',
          }}
          animate={{
            backgroundColor: '#00000099',
            opacity: 1,
            backdropFilter: 'blur(20px)',
          }}
          exit={{
            backgroundColor: '#00000000',
            opacity: 0,
            backdropFilter: 'blur(0px)',
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={classes.modalClose}
          onClick={(e) => {
            onClose ? onClose() : null;
          }}
        ></motion.div>
      )}

      <Draggable
        onDragDown={() => {
          onClose ? onClose() : null;
        }}
        styleClass={classes.modalInner}
      >
        {children}
      </Draggable>
    </Modal>
  );
};
