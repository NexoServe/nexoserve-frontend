import { useState } from 'react';

import Select from 'react-select';

import colors from '../../../css/colors';

import useStyles from './css';
import { IDropdown } from './types';

const Dropdown = (props: IDropdown) => {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classes.dropdown}>
      <label className={classes.dropdownLabel}>{props.label}</label>
      <Select
        {...props}
        className="basic-single"
        classNamePrefix="select"
        isClearable={false}
        isSearchable={false}
        name="color"
        menuPlacement="auto"
        menuPortalTarget={document.body}
        menuPosition="fixed"
        options={props.options}
        styles={{
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
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999, // adjust this as needed
          }),
          singleValue: (provided) => ({
            ...provided,
            height: '100%',
            lineHeight: '100%',
          }),
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Dropdown;
