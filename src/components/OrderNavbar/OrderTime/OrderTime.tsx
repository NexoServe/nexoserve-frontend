import { useRecoilState, useRecoilValue } from 'recoil';

import {
  OrderDateAtom,
  OrderTimeAtom,
  ShowTimeModalAtom,
} from '../../../state/OrderNavbar';
import { ModalPopUp } from '../../Modal/Modal';
import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';
import OrderNavBarModal from '../OrderNavBarModal/OrderNavBarModal';

import useStyles from './css';
import { IOrderTime } from './types';

const OrderTime = ({ theme }: IOrderTime) => {
  const [showTimeModal, setShowTimeModal] = useRecoilState(ShowTimeModalAtom);

  const orderTime = useRecoilValue(OrderTimeAtom);
  const orderDate = useRecoilValue(OrderDateAtom);
  const classes = useStyles({
    theme,
  });

  return (
    <>
      <button
        onClick={() => setShowTimeModal(true)}
        className={classes.orderTime}
      >
        <RoundBorder styleClass={classes.orderTimeContainer} theme={theme}>
          <SvgIcons
            styleClass={classes.orderTimeIcon}
            name="clock"
            fill={theme.primary}
          />
          <div className={classes.orderTimeInner}>
            <span className={classes.orderTimeLabel}>{orderDate?.label}:</span>
            <span
              style={{
                color: theme.primary,
              }}
            >
              {orderTime?.label}
            </span>
          </div>
          <SvgIcons
            styleClass={classes.orderTimeIconArrow}
            name="arrow"
            fill={theme.primary}
          />
        </RoundBorder>
      </button>

      <ModalPopUp
        showModal={showTimeModal}
        onClose={() => setShowTimeModal(false)}
        theme={theme}
      >
        <OrderNavBarModal
          setModal={setShowTimeModal}
          headerText="Date and Time"
          theme={theme}
        />
      </ModalPopUp>
    </>
  );
};

export default OrderTime;
