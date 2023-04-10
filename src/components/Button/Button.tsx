import classNames from 'classnames';

import useStyles from './css';
import { ButtonType } from './types';

const Button = (props: ButtonType) => {
  const { children, onClick, styleClass } = props;
  const styles = useStyles();

  return (
    <button
      className={classNames(styleClass, styles.button)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
