import useStyles from './css';
import { ContainerPropsType } from './types';

const Container = ({ children, styleClass }: ContainerPropsType) => {
  const { classes } = useStyles();

  return (
    <div className={`${classes.container} ${styleClass ? styleClass : ''}`}>
      {children}
    </div>
  );
};

export default Container;
