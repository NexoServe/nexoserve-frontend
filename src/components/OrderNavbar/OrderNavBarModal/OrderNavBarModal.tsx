import { ChangeEvent, useState } from 'react';

import { useRecoilState } from 'recoil';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import { ShoppingCartTipAtom } from '../../../state/ShoppingCartState';
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import Input from '../../Input/Input';
import ModalHeader from '../../ModalHeader/ModalHeader';

import 'react-dropdown/style.css';
import useStyles from './css';
import { IShoppingCartCheckoutTipsModal } from './types';

const OrderNavBarModal = ({
  setShowCustomTip,
  headerText,
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

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setShoppingCartTip({
  //     isTipPercentage: false,
  //     tip: parseFloat(value),
  //   });
  //   setShowCustomTip(false);
  // };

  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ];

  const dropdownStyles = {
    control: {
      height: base(4),
      padding: `0.75rem`,
      borderRadius: base(0.5),
      marginTop: base(0.5),
      border: `1px solid #e1e1e1`,
      fontSize: '16px',
      background: colors.white,
      boxShadow:
        '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
    },
    dropdown: {
      // any styles you want to apply to the dropdown
    },
    option: {
      // any styles you want to apply to the options
    },
    // ... any other styles you want to customize
  };

  const [selected, setSelected] = useState<string[]>([]);
  const [handle, setHandle] = useState(false);

  return (
    <form
      // onSubmit={handleSubmit}
      className={classes.shoppingCartCheckoutTipsModal}
    >
      <ModalHeader text={headerText} />
      <div className={classes.shoppingCartCheckoutTipsModalContent}>
        <Dropdown />

        <Input
          error={null}
          label="Date"
          value={value}
          inputMode="decimal"
          onChange={handleChange}
          placeholder="$0.00"
        />
        <Input
          error={null}
          label="Time"
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

export default OrderNavBarModal;
