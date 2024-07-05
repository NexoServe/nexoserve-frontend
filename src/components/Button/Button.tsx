import classNames from 'classnames';

import useStyles from './css';
import { ButtonType } from './types';

const Button = ({
  children,
  onClick,
  styleClass,
  disabled,
  theme,
  ...rest
}: ButtonType) => {
  const { classes } = useStyles({
    theme,
  });

  return (
    <button
      className={classNames(styleClass, classes.button)}
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
