import Button from '../../Button/Button';

import useStyles from './css';

const ShoppingCarCheckoutButton = () => {
  const styles = useStyles();

  return (
    <div className={styles.shoppingCartModalButtonBox}>
      <Button>Checkout ($54.52)</Button>
    </div>
  );
};

export default ShoppingCarCheckoutButton;
