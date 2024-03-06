import useStyles from './css';
import { IDivider } from './types';

const Divider = ({ styleClass, theme }: IDivider) => {
  const styles = useStyles({
    theme,
  });

  return <div className={`${styleClass} ${styles.divider}`}></div>;
};

export default Divider;
