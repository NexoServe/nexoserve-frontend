import { createUseStyles } from 'react-jss';

import colors from '../../../css/colors';
import zIndex from '../../../css/zIndex';

const useStyles = createUseStyles({
  modalBackground: {
    width: '100%',
    height: '100%',
    background: colors.black,
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
  },

  modalWrapper: {
    width: '800px',
    height: '500px',
    boxShadow: '0 5px 16px rgba(0, 0, 0, 0.2)',
    background: colors.white,
    color: colors.black,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    position: 'relative',
    zIndex: zIndex.modal,
    borderRadius: '10px',
  },

  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#141414',

    p: {
      marginBottom: '1rem',
    },

    button: {
      padding: '10px 24px',
      background: '#141414',
      color: '#fff',
      border: 'none',
    },
  },
});

export default useStyles;
