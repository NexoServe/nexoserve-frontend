import classNames from 'classnames';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  OrderDetailsAtom,
  ShowInfoModalAtom,
} from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import { ModalPopUp } from '../../Modal/Modal';
import SvgIcons from '../../SvgIcons';
import OrderInfoModal from '../OrderInfoModal/OrderInfoModal';

import useStyles from './css';
import { IOrderInfo } from './types';

const OrderInfo = ({ theme }: IOrderInfo) => {
  const classes = useStyles({
    theme,
  });

  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  const orderDetails = useRecoilValue(OrderDetailsAtom);

  const [showInfoModal, setShowInfoModal] = useRecoilState(ShowInfoModalAtom);

  return (
    <>
      <button
        className={classes.orderInfo}
        onClick={() => setShowInfoModal(true)}
      >
        <SvgIcons
          styleClass={classes.orderInfoIcon}
          name="info"
          fill={theme.primary}
        />
        <div className={classes.orderInfoStatus}>
          <div className={classes.orderInfoStatusText}>
            {restaurantDetails?.openStatusMessage}
          </div>
          <div
            className={classNames(classes.orderInfoStatusIcon, {
              [classes.orderInfoStatusIconClosed]:
                !orderDetails?.isOpenNowPickUp,
            })}
          ></div>
        </div>
      </button>

      <ModalPopUp
        showModal={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        theme={theme}
      >
        <OrderInfoModal theme={theme} setModal={setShowInfoModal} />
      </ModalPopUp>
    </>
  );
};

export default OrderInfo;
