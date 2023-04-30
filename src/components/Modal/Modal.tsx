import { useEffect, useMemo, useState } from 'react';

import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from 'react-modal';

import useStyles from './css';
import { IModal } from './types';

export const ModalPopUp = ({
  showModal,
  children,
  styleClass,
  onClose,
}: IModal) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (showModal) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [showModal]);

  const classes = useStyles();
  Modal.setAppElement('#__next');

  useMemo(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <Modal
          isOpen={show}
          onRequestClose={() => setShow(false)}
          className={classNames(styleClass, classes.modal)}
          onAfterClose={() => {
            onClose ? onClose() : null;
          }}
        >
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
          <div className={classes.modalInner}>{children}</div>
        </Modal>
      )}
    </AnimatePresence>
  );
};
