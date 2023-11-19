import { useEffect, useState } from 'react';

import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { animated, useTransition } from 'react-spring';

import zIndex from '../../../css/zIndex';

import useStyles from './css';
import { IModalPopUp } from './types';

export const ModalPopUp = ({
  showModal,
  children,
  onClose,
  overlayClass,
}: IModalPopUp) => {
  const styles = useStyles();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleEscape);

    // Clean up the event listener
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Transition for the background
  const backgroundTransition = useTransition(showModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // Transition for the modal content
  const contentTransition = useTransition(showModal, {
    from: { transform: 'translateY(100%)' },
    enter: { transform: 'translateY(0%)' },
    leave: { transform: 'translateY(100%)' },
  });

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // This code runs after component mounts, hence on the client side
    const element = document.getElementById('__next');
    setModalRoot(element);
  }, []);

  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    <>
      {backgroundTransition((style, item) =>
        item ? (
          <animated.div
            style={{
              ...style,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              cursor: 'pointer',
            }}
            onClick={() => onClose()}
            className={classNames(overlayClass, styles.modalOverlay)}
          >
            {contentTransition((style, item) =>
              item ? (
                <animated.div
                  style={{
                    ...style,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: `${zIndex.modal} + 1`,
                  }}
                  onClick={handleContentClick}
                >
                  {children}
                </animated.div>
              ) : null,
            )}
          </animated.div>
        ) : null,
      )}
    </>,
    modalRoot, // Render into `#__next`
  );
};
