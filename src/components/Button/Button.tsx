import classNames from 'classnames';

import useStyles from './css';
import { ButtonType } from './types';

const Button = ({
  children,
  onClick,
  styleClass,
  disabled,
  ...rest
}: ButtonType) => {
  const styles = useStyles();

  console.log('disabled', disabled);

  return (
    <button
      className={classNames(styleClass, styles.button)}
      onClick={onClick}
      {...rest}
      disabled={disabled}
      style={{ ...rest.style, opacity: disabled ? 0.5 : 1 }}
    >
      {children}
    </button>
  );
};

export default Button;
