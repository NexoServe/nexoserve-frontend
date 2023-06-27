import { ChangeEvent, useState } from 'react';

import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import Input from '../../Input/Input';
import ModalHeader from '../../ModalHeader/ModalHeader';
import TextArea from '../../TextArea/TextArea';

import useStyles from './css';
import { IOrderNavBarModal } from './types';

const OrderNavBarModal = ({
  setModal,
  headerText,
  type,
}: IOrderNavBarModal) => {
  const [value, setValue] = useState('');
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

  const [selected, setSelected] = useState<string[]>([]);
  const [handle, setHandle] = useState(false);

  return (
    <form
      // onSubmit={handleSubmit}
      className={classes.shoppingCartCheckoutTipsModal}
    >
      <ModalHeader text={headerText} onClick={() => setModal(false)} />
      <div className={classes.shoppingCartCheckoutTipsModalContent}>
        {type === 'delivery' && (
          <>
            <Input
              error={null}
              isRequired={true}
              required
              label="Address"
              value={value}
              onChange={handleChange}
              placeholder="Your Address"
            />

            <Input
              error={null}
              label="Ste, Apt, Floor"
              value={value}
              onChange={handleChange}
              placeholder="Ste, Apt, Floor"
            />

            <TextArea />
          </>
        )}

        <Dropdown label="Date" />
        <Dropdown label="Time" />

        <Button
          type="submit"
          styleClass={classes.shoppingCartCheckoutTipsModalButton}
        >
          Add Details
        </Button>
      </div>
    </form>
  );
};

export default OrderNavBarModal;
