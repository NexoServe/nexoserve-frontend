import { useRef } from 'react';

import * as EmailValidator from 'email-validator';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  CheckoutEmailAtom,
  CheckoutEmailErrorAtom,
  CheckoutFirstNameAtom,
  CheckoutFirstNameErrorAtom,
  CheckoutLastNameAtom,
  CheckoutLastNameErrorAtom,
  isCheckoutContactIncompleteAtom,
} from '../../../state/CheckoutState';
import Input from '../../Input/Input';
import PhoneNumberInput from '../../PhoneNumberInput/PhoneNumberInput';
import RoundBorder from '../../RoundBorder/RoundBorder';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';

import useStyles from './css';
import { ICheckoutContact } from './types';

const CheckoutContact = ({ theme }: ICheckoutContact) => {
  const [, setFirstName] = useRecoilState(CheckoutFirstNameAtom);
  const [firstNameError, setFirstNameError] = useRecoilState(
    CheckoutFirstNameErrorAtom,
  );

  const [, setLastName] = useRecoilState(CheckoutLastNameAtom);
  const [lastNameError, setLastNameError] = useRecoilState(
    CheckoutLastNameErrorAtom,
  );

  const [, setEmail] = useRecoilState(CheckoutEmailAtom);
  const [emailError, setEmailError] = useRecoilState(CheckoutEmailErrorAtom);

  const isCheckoutContactIncomplete = useRecoilValue(
    isCheckoutContactIncompleteAtom,
  );

  const classes = useStyles();

  const ref = useRef<HTMLDivElement>(null);

  if (isCheckoutContactIncomplete) {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  return (
    <div ref={ref}>
      <RoundBorder styleClass={classes.checkoutContact} theme={theme}>
        <CheckoutHeader title="Contact" theme={theme} />
        <Input
          onChange={(e) => {
            setFirstName(e.target.value);
            if (e.target.value === '') {
              setFirstNameError(true);
            } else {
              setFirstNameError(false);
            }
          }}
          label="First Name"
          placeholder="John"
          isRequired={true}
          error={firstNameError ? 'Your First Name is incomplete.' : null}
          theme={theme}
        />

        <Input
          onChange={(e) => {
            setLastName(e.target.value);
            if (e.target.value === '') {
              setLastNameError(true);
            } else {
              setLastNameError(false);
            }
          }}
          label="Last Name"
          placeholder="Doe"
          isRequired={true}
          error={lastNameError ? 'Your Last Name is incomplete.' : null}
          theme={theme}
        />
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
            if (
              e.target.value !== null &&
              !EmailValidator.validate(e.target.value)
            ) {
              setEmailError(true);
            } else {
              setEmailError(false);
            }
          }}
          label="Email"
          type="email"
          required
          placeholder="email@example.com"
          isRequired={true}
          error={emailError ? 'Your Email is incomplete.' : null}
          theme={theme}
        />
        <PhoneNumberInput theme={theme} />
      </RoundBorder>
    </div>
  );
};

export default CheckoutContact;
