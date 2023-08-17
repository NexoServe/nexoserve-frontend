import classNames from 'classnames';

import useStyles from './css';
import { IRoundBorder } from './types';

const RoundBorder = ({ children, styleClass, ...rest }: IRoundBorder) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.roundBorder, styleClass)} {...rest}>
      {children}
    </div>
  );
};

export default RoundBorder;
