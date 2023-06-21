import useStyles from './css';
import { IRoundBorder } from './types';

const RoundBorder = ({ children, styleClass }: IRoundBorder) => {
  const classes = useStyles();
  return (
    <div className={`${classes.roundBorder} ${styleClass}`}>{children}</div>
  );
};

export default RoundBorder;
