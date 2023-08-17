import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js';
import { useRecoilState } from 'recoil';
import { Rifm } from 'rifm';

import {
  CheckoutPhoneNumberAtom,
  CheckoutPhoneNumberErrorAtom,
} from '../../state/CheckoutState';
import Input from '../Input/Input';

const parseDigits = (string: string) => (string?.match(/\d+/g) || []).join('');

const formatPhone = (string: string) => {
  const digits = parseDigits(string)?.substr(0, 10);
  return new AsYouType('US').input(digits);
};

const PhoneNumberInput = () => {
  const [phone, setPhone] = useRecoilState(CheckoutPhoneNumberAtom);
  const [phoneError, setPhoneError] = useRecoilState(
    CheckoutPhoneNumberErrorAtom,
  );

  const handleChange = (value: string) => {
    setPhone(value);
    const phoneNumber = parsePhoneNumberFromString(value, 'US');
    setPhoneError(phoneNumber && phoneNumber.isValid() ? false : true);
  };

  return (
    <div>
      <Rifm
        accept={/\d+/g}
        mask={
          phone?.length < 6 && /[^\d]+/.test(phone[3])
            ? undefined
            : phone?.length >= 14
        }
        format={formatPhone}
        value={phone as string}
        onChange={handleChange}
      >
        {({ value, onChange }) => (
          <div>
            <Input
              error={phoneError ? 'Your Phone Number is incomplete.' : null}
              label="Phone Number"
              isRequired={true}
              value={value}
              onChange={onChange}
              placeholder="(xxx) xxx-xxxx"
            />
          </div>
        )}
      </Rifm>
    </div>
  );
};

export default PhoneNumberInput;
