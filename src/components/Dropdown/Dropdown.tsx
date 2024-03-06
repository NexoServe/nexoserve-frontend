import Select from 'react-select';

import useStyles from './css';
import { IDropdown } from './types';

const Dropdown = ({ selectProps, label, theme }: IDropdown) => {
  const classes = useStyles({
    theme,
  });
  // const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classes.dropdown}>
      <label className={classes.dropdownLabel}>{label}</label>
      <Select
        {...selectProps}
        className="basic-single"
        classNamePrefix="select"
        isClearable={false}
        isSearchable={false}
        name="color"
        menuPlacement="auto"
        menuPortalTarget={document.body}
        menuPosition="fixed"
        options={selectProps.options}
        styles={{
          control: (provided) => ({
            ...provided,
            height: 40, // adjust this as needed
            borderRadius: '5px', // adjust this as needed
            border: `1px solid ${theme.primary}30`,
            fontSize: '16px',
            background: theme.neutral,
            color: theme.primary,
          }),
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999, // adjust this as needed
            color: theme.primary,
            backgroundColor: theme.neutral,
          }),
          singleValue: (provided) => ({
            ...provided,
            height: '100%',
            lineHeight: '100%',
            color: theme.primary,
            background: theme.neutral,
          }),
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? theme.neutral : theme.primary,
            background: state.isSelected ? theme.accent : theme.neutral,

            '&:hover': {
              background: theme.accent,
            },

            '&:active': {
              background: theme.accent,
            },

            '&:focus': {
              background: theme.accent,
            },
          }),
          container: (provided) => ({
            ...provided,
            backgroundColor: theme.neutral,
          }),
          valueContainer: (provided) => ({
            ...provided,
            color: theme.primary,
            background: theme.neutral,
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            backgroundColor: theme.neutral,
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: theme.neutral,
          }),
        }}
        // onFocus={() => setIsFocused(true)}
        // onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Dropdown;
