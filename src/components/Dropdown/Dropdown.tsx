import { useState } from 'react';

import Select from 'react-select';

import colors from '../../../css/colors';
const Dropdown = (props: SelectProps<{ value: string; label: string }>) => {
  const [isFocused, setIsFocused] = useState(false);

  const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: 40, // adjust this as needed
      borderRadius: '5px', // adjust this as needed
      border: isFocused ? '1px solid blue' : '1px solid #e1e1e1',
      fontSize: '16px',
      background: colors.white,
      boxShadow:
        '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
    }),
    singleValue: (provided) => ({
      ...provided,
      height: '100%',
      lineHeight: '100%',
    }),
  };

  return (
    <>
      <label>Date</label>
      <Select
        tabIndex={0}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        isLoading={true}
        isClearable={false}
        // isRtl={isRtl}
        isSearchable={false}
        name="color"
        options={colourOptions}
        styles={customStyles}
        onFocus={(e) => setIsFocused(true)}
        onBlur={(e) => setIsFocused(false)}
      />
    </>
  );
};

export default Dropdown;
