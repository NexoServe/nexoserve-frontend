import Lottie from 'react-lottie';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as deliveryLottie from '../../../lottie/delivery.json';
import { InfoModalAtom } from '../../../state/InfoModalState';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import ModalHeader from '../../ModalHeader/ModalHeader';
import useStyles from '../css';
import { IDeliveryErrorInfoModal } from '../types';

const DeliveryErrorInfoModal = ({ theme }: IDeliveryErrorInfoModal) => {
  const classes = useStyles({
    theme,
  });
  const [, setInfoModalState] = useRecoilState(InfoModalAtom);
  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  // const [showMore, setShowMore] = useState(false);

  return (
    <>
      <ModalHeader
        text={'Error'}
        showCloseIcon={true}
        onClick={() => setInfoModalState({ showModal: false })}
        theme={theme}
      />
      <div className={classes.infoModalBody}>
        <Lottie
          options={{
            animationData: deliveryLottie,
            autoplay: true,
          }}
          width={'100%'}
          height={200}
          isClickToPauseDisabled={true}
        />

        <div className={classes.infoModalBodyMessage}>
          Delivery is not available online at this time. Please call the
          restaurant at{' '}
          <a href={`tel:${restaurantDetails?.phoneNumbers?.[0]?.number}`}>
            {restaurantDetails?.phoneNumbers?.[0]?.number}
          </a>{' '}
          and place your order over the phone. NOTE: You can still place a pick
          up order.
          <br />
          {`We're`} working hard to resolve this as soon as possible.
        </div>
      </div>
    </>
  );
};

export default DeliveryErrorInfoModal;
