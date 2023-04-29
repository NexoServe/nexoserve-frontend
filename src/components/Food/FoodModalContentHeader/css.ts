import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  foodModalContentHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& h3': {
      margin: 0,
      fontSize: '18px',
      lineHeight: '100%',
    },

    '& span': {
      margin: 0,
      fontSize: '14px',
    },
  },
});

export default useStyles;
