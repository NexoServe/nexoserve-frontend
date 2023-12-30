import Lottie from 'react-lottie';
import { useRecoilState } from 'recoil';

import * as paymentDeclined from '../../../lottie/declined.json';
import * as paymentProcessing from '../../../lottie/payment_processing.json';
import * as paymentSuccess from '../../../lottie/success.json';
import { InfoModalAtom } from '../../../state/InfoModalState';
import ModalHeader from '../../ModalHeader/ModalHeader';
import useStyles from '../css';
import { IPaymentInfoModal } from '../types';

const PaymentInfoModal = ({ theme }: IPaymentInfoModal) => {
  const classes = useStyles({
    theme,
  });
  const [infoModalState, setInfoModalState] = useRecoilState(InfoModalAtom);

  return (
    <>
      <ModalHeader
        text={infoModalState.title as string}
        showCloseIcon={infoModalState.type === 'error' ? true : false}
        onClick={() => setInfoModalState({ showModal: false })}
        theme={theme}
      />
      <div className={classes.infoModalBody}>
        {infoModalState.type === 'success' ? (
          <>
            <Lottie
              options={{
                animationData: paymentSuccess,
                autoplay: true,
                loop: false,
              }}
              width={'100%'}
              height={200}
            />
            <div className={classes.infoModalBodyMessage}>
              {infoModalState.message}
            </div>
          </>
        ) : infoModalState.type === 'error' ? (
          <>
            <Lottie
              options={{
                animationData: paymentDeclined,
                autoplay: true,
                loop: false,
              }}
              width={'100%'}
              height={200}
            />
            <div className={classes.infoModalBodyMessage}>
              {infoModalState.message}
            </div>
          </>
        ) : (
          <>
            <Lottie
              options={{
                animationData: paymentProcessing,
                autoplay: true,
              }}
              width={'100%'}
              height={200}
            />
            <div className={classes.infoModalBodyMessage}>
              {infoModalState.message}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PaymentInfoModal;
