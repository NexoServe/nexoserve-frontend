import { AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';

import { InfoModalAtom } from '../../state/InfoModalState';
import { ModalPopUp } from '../Modal/Modal';

import FatalErrorInfoModal from './components/FatalErrorInfoModal';
import PaymentInfoModal from './components/PaymentInfoModal';
import useStyles from './css';

const InfoModal = () => {
  const classes = useStyles();

  const [infoModalState] = useRecoilState(InfoModalAtom);

  console.log('infoModalState', infoModalState);

  return (
    <AnimatePresence>
      {infoModalState && (
        <ModalPopUp showModal={infoModalState.showModal || false}>
          <div className={classes.infoModal}>
            {infoModalState.infoModalType === 'payment' ? (
              <PaymentInfoModal />
            ) : (
              <FatalErrorInfoModal />
            )}
          </div>
        </ModalPopUp>
      )}
    </AnimatePresence>
  );
};

export default InfoModal;
