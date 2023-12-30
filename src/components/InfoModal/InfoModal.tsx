import { useRecoilState } from 'recoil';

import { InfoModalAtom } from '../../state/InfoModalState';
import { ModalPopUp } from '../Modal/Modal';

import DeliveryErrorInfoModal from './components/DeliveryErrorInfoModal';
import FatalErrorInfoModal from './components/FatalErrorInfoModal';
import PaymentInfoModal from './components/PaymentInfoModal';
import useStyles from './css';
import { IInfoModal } from './types';

const InfoModal = ({ theme }: IInfoModal) => {
  const classes = useStyles({
    theme,
  });

  const [infoModalState] = useRecoilState(InfoModalAtom);

  return (
    <ModalPopUp
      showModal={infoModalState.showModal || false}
      onClose={() => console.log('1')}
      theme={theme}
    >
      <div className={classes.infoModal}>
        {infoModalState.infoModalType === 'payment' ? (
          <PaymentInfoModal theme={theme} />
        ) : infoModalState.infoModalType === 'delivery' ? (
          <DeliveryErrorInfoModal theme={theme} />
        ) : (
          <FatalErrorInfoModal theme={theme} />
        )}
      </div>
    </ModalPopUp>
  );
};

export default InfoModal;
