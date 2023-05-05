import useStyles from './css';
import { IDivider } from './types';

const Divider = ({ styleClass }: IDivider) => {
  const styles = useStyles();

  return <div className={`${styleClass} ${styles.divider}`}></div>;
};

export default Divider;
