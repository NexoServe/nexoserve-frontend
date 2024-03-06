import Container from '../../Container/Container';
import Divider from '../../Divider/Divider';
import OrderNavbarTop from '../OrderNavbarTop/OrderNavbarTop';

import useStyles from './css';
import { IOrderNavbar } from './types';

const OrderNavbar = ({ theme }: IOrderNavbar) => {
  const classes = useStyles({
    theme,
  });

  return (
    <div className={classes.orderNavbar}>
      <Container styleClass={classes.orderNavbarContainer}>
        <OrderNavbarTop theme={theme} />
        {/* <OrderNavbarBottom /> */}
      </Container>
      <Divider theme={theme} />
    </div>
  );
};

export default OrderNavbar;
