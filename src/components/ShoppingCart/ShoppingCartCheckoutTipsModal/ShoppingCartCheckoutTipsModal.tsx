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
  // const [value, setValue] = useState<null | string>(null);
  const [, setShoppingCartTip] = useRecoilState(ShoppingCartTipAtom);
  const classes = useStyles();

  const [value, setValue] = useState('$');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const valueWithoutDollarSign = newValue.replace(/^\$/, '');

    // Only allow numbers and decimal numbers
    if (/^\d*(\.\d{0,2})?$/.test(valueWithoutDollarSign)) {
      setValue('$' + valueWithoutDollarSign);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === null || value === '' || value === '$') {
      setValue('');
      return;
    }

    setShoppingCartTip({
      isTipPercentage: false,
      tip: parseFloat(value.slice(1) as string),
    });
    setShowCustomTip(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.shoppingCartCheckoutTipsModal}
    >
      <ModalHeader text="Add a Tip" onClick={() => setShowCustomTip(false)} />
      <div className={classes.shoppingCartCheckoutTipsModalContent}>
        <Input
          error={value === '' ? 'Please enter a tip amount' : null}
          label="How much would you like to tip?"
          value={value || undefined}
          inputMode="decimal"
          onChange={handleChange}
          placeholder="$0.00"
          maxLength={7}
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
