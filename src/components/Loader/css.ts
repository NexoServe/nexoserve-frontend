import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    width: '100px',
    height: '100px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slice: {
    position: 'absolute',
    width: '0',
    height: '0',
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderTop: '35px solid #FEFCC6',
    zIndex: 10,

    '&:before': {
      content: '""',
      position: 'absolute',
      left: '-15px',
      top: '-45px',
      width: '30px',
      height: '15px',
      background: '#FEFCC6',
      borderRadius: '100%',
      borderTop: '5px solid #E57A19',
      zIndex: -1,
    },

    '&:nth-child(1)': {
      transform: 'rotate(30deg) translate(0, -20px)',
    },

    '&:nth-child(2)': {
      transform: 'rotate(90deg) translate(0, -20px)',
    },

    '&:nth-child(3)': {
      transform: 'rotate(150deg) translate(0, -20px)',
    },

    '&:nth-child(4)': {
      transform: 'rotate(210deg) translate(0, -20px)',
    },

    '&:nth-child(5)': {
      transform: 'rotate(270deg) translate(0, -20px)',
    },

    '&:nth-child(6)': {
      transform: 'rotate(330deg) translate(0, -20px)',
    },
  },

  tomato: {
    background: '#A30000',
    position: 'absolute',
    borderRadius: '100%',
    '&:nth-child(1)': {
      width: '10px',
      height: '10px',
      top: '-37px',
      left: '1px',
    },
    '&:nth-child(2)': {
      width: '7px',
      height: '7px',
      top: '-25px',
      left: '-7px',
    },
  },

  olive: {
    background: '#A30000',
    position: 'absolute',
    borderRadius: '100%',
    '&:nth-child(3)': {
      width: '4px',
      height: '4px',
      top: '-14px',
      left: '-1px',
    },
  },
});

export default useStyles;
