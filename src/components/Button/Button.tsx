import classNames from 'classnames';

import useStyles from './css';
import { ButtonType } from './types';

const Button = ({ children, onClick, styleClass, ...rest }: ButtonType) => {
  const styles = useStyles();

  console.log('rest', rest);

  return (
    <button
      className={classNames(styleClass, styles.button)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
