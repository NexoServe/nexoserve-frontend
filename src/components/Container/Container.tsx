import useStyles from './css';
import { ContainerPropsType } from './types';

const Container = ({ children }: ContainerPropsType) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
