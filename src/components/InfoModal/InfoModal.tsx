import { useRecoilState } from 'recoil';

import { InfoModalAtom } from '../../state/InfoModalState';
import { ModalPopUp } from '../Modal/Modal';

import DeliveryErrorInfoModal from './components/DeliveryErrorInfoModal';
import FatalErrorInfoModal from './components/FatalErrorInfoModal';
import PaymentInfoModal from './components/PaymentInfoModal';
import useStyles from './css';

const InfoModal = () => {
  const classes = useStyles();

  const [infoModalState] = useRecoilState(InfoModalAtom);

  return (
    <ModalPopUp
      showModal={infoModalState.showModal || false}
      onClose={() => console.log('')}
    >
      <div className={classes.infoModal}>
        {infoModalState.infoModalType === 'payment' ? (
          <PaymentInfoModal />
        ) : infoModalState.infoModalType === 'delivery' ? (
          <DeliveryErrorInfoModal />
        ) : (
          <FatalErrorInfoModal />
        )}
      </div>
    </ModalPopUp>
  );
};

export default InfoModal;
