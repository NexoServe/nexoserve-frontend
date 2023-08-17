import Container from '../../Container/Container';
import Divider from '../../Divider/Divider';
import OrderNavbarBottom from '../OrderNavbarBottom/OrderNavbarBottom';
import OrderNavbarTop from '../OrderNavbarTop/OrderNavbarTop';

import useStyles from './css';

const OrderNavbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.orderNavbar}>
      <Container styleClass={classes.orderNavbarContainer}>
        <OrderNavbarTop />
        <Divider />
        <OrderNavbarBottom />
      </Container>
    </div>
  );
};

export default OrderNavbar;
