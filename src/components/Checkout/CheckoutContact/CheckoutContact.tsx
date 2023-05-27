import Input from '../../Input/Input';
import PhoneNumberInput from '../../PhoneNumberInput/PhoneNumberInput';
import RoundBorder from '../../RoundBorder/RoundBorder';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';

import useStyles from './css';

const CheckoutContact = () => {
  const classes = useStyles();

  return (
    <RoundBorder styleClass={classes.checkoutContact}>
      <CheckoutHeader title="Contact" />
      <Input label="First Name" placeholder="John" isRequired={true} />
      <Input label="Last Name" placeholder="Doe" isRequired={true} />
      <Input
        label="Email"
        type="email"
        required
        placeholder="email@example.com"
        isRequired={true}
      />
      <PhoneNumberInput />
    </RoundBorder>
  );
};

export default CheckoutContact;
