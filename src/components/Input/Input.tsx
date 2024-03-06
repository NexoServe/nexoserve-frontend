import classNames from 'classnames';

import useStyles from './css';
import { IInput } from './types';

const Input = ({
  styleClass,
  isRequired = false,
  label,
  error,
  theme,
  ...rest
}: IInput) => {
  const classes = useStyles({
    theme,
  });

  return (
    <div className={classNames(styleClass)}>
      <label className={classes.inputLabel}>
        <div>
          {label}{' '}
          {isRequired && <span className={classes.inputLabelRequired}>*</span>}
        </div>

        <input
          className={`${classes.input} ${error && classes.inputError}`}
          {...rest}
        />
      </label>
      {error && <div className={classes.inputErrorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
