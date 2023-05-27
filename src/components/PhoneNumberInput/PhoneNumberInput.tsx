import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

import Input from '../Input/Input';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<null | string>(null);
  const inputRef = useRef(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    let newInput = input.replace(/\D/g, '').substring(0, 10); // Remove all non-numeric characters and keep the first 10 digits

    // Formatting the input
    if (newInput.length >= 6) {
      newInput = `(${newInput.substring(0, 3)}) ${newInput.substring(
        3,
        6,
      )}-${newInput.substring(6)}`;
    } else if (newInput.length >= 3) {
      newInput = `(${newInput.substring(0, 3)}) ${newInput.substring(3)}`;
    } else if (newInput.length > 0) {
      newInput = `(${newInput}`;
    }

    setPhoneNumber(newInput);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // If the user is deleting the "-" or ")", shift the cursor to the left
    const target = event.target as HTMLInputElement;

    const selectionStart = target.selectionStart;
    if (
      event.key === 'Backspace' &&
      selectionStart !== null &&
      (phoneNumber[selectionStart - 1] === '-' ||
        phoneNumber[selectionStart - 1] === '(' ||
        phoneNumber[selectionStart - 1] === ')' ||
        phoneNumber[selectionStart - 1] === ' ')
    ) {
      event.preventDefault();
      const newPhoneNumber =
        phoneNumber.slice(0, selectionStart - 1) +
        phoneNumber.slice(selectionStart);
      setPhoneNumber(newPhoneNumber);

      // Move the cursor to the correct position
      requestAnimationFrame(() => {
        if (inputRef.current) {
          (inputRef.current as any).setSelectionRange(
            selectionStart - 1,
            selectionStart - 1,
          );
        }
      });
    }
  };

  const handleBlur = () => {
    const isValid = /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
    setError(isValid ? null : 'Phone number is not valid');
  };

  return (
    <div>
      <Input
        ref={inputRef}
        type="text"
        value={phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        label="Phone Number"
        placeholder="(xxx) xxx-xxxx"
        isRequired={true}
      />
    </div>
  );
};

export default PhoneNumberInput;
