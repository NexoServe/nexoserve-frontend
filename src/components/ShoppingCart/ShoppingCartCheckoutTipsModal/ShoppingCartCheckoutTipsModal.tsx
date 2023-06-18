import { ChangeEvent, FormEvent, useState } from 'react';

import { useRecoilState } from 'recoil';

import { ShoppingCartTipAtom } from '../../../state/ShoppingCartState';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import ModalHeader from '../../ModalHeader/ModalHeader';

import useStyles from './css';
import { IShoppingCartCheckoutTipsModal } from './types';

const ShoppingCartCheckoutTipsModal = ({
  setShowCustomTip,
}: IShoppingCartCheckoutTipsModal) => {
  const [value, setValue] = useState('');
  const [, setShoppingCartTip] = useRecoilState(ShoppingCartTipAtom);
  const classes = useStyles();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^\d*(\.\d{0,2})?$/.test(newValue) || newValue === '') {
      setValue(newValue);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShoppingCartTip({
      isTipPercentage: false,
      tip: parseFloat(value),
    });
    setShowCustomTip(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.shoppingCartCheckoutTipsModal}
    >
      <ModalHeader text="Add a Tip" />
      <div className={classes.shoppingCartCheckoutTipsModalContent}>
        <Input
          error={null}
          label="How much would you like to tip?"
          value={value}
          inputMode="decimal"
          onChange={handleChange}
          placeholder="$0.00"
        />
        <Button
          type="submit"
          styleClass={classes.shoppingCartCheckoutTipsModalButton}
        >
          Add Tip
        </Button>
      </div>
    </form>
  );
};

export default ShoppingCartCheckoutTipsModal;
