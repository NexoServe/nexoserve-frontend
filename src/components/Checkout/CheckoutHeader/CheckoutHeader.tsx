import useStyles from './css';
import { ICheckoutHeader } from './types';

const CheckoutHeader = ({ title }: ICheckoutHeader) => {
  const classes = useStyles();

  return (
    <div className={classes.checkoutHeader}>
      <h2 className={classes.checkoutHeaderTitle}>{title}</h2>
    </div>
  );
};

export default CheckoutHeader;
