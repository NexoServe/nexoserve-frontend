import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navbar: {
    border: '1px solid red',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  navbarCounter: {
    border: '1px solid black',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',
    marginRight: '1rem',
  },
});

export default useStyles;
