import classNames from 'classnames';

import useStyles from './css';
import { IRoundBorder } from './types';

const RoundBorder = ({
  children,
  styleClass,
  theme,
  ...rest
}: IRoundBorder) => {
  const classes = useStyles({
    theme,
  });
  return (
    <div className={classNames(classes.roundBorder, styleClass)} {...rest}>
      {children}
    </div>
  );
};

export default RoundBorder;
