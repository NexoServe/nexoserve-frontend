import classNames from 'classnames';

import useStyles from './css';
import { IInput } from './types';

const Input = ({
  styleClass,
  isRequired = false,
  isPhoneNumber = false,
  label,
  ...rest
}: IInput) => {
  const classes = useStyles();

  return (
    <div className={classNames(styleClass)}>
      <label className={classes.inputLabel}>
        <div>
          {label}{' '}
          {isRequired && <span className={classes.inputLabelRequired}>*</span>}
        </div>

        <input className={classes.input} {...rest} />
      </label>
    </div>
  );
};

export default Input;
