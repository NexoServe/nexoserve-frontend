import useStyles from './css';
import { ICheckoutHeader } from './types';

const CheckoutHeader = ({ title, theme }: ICheckoutHeader) => {
  const classes = useStyles({
    theme,
  });

  return (
    <div className={classes.checkoutHeader}>
      <h2 className={classes.checkoutHeaderTitle}>{title}</h2>
    </div>
  );
};

export default CheckoutHeader;
