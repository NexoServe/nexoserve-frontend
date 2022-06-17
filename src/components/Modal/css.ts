import { createUseStyles } from 'react-jss';

import colors from '../../../css/colors';
import zIndex from '../../../css/zIndex';

const useStyles = createUseStyles({
  modal: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalClose: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.black,
    zIndex: zIndex.modal,
    cursor: 'pointer',
  },

  modalInner: {
    borderRadius: '5px',
    padding: '3rem',
    position: 'relative',
    zIndex: zIndex.modal + 1,
    backgroundColor: colors.white,
    height: 'auto',
    transition: 'height 250ms ease-in-out',
    minWidth: '300px',
  },
});

export default useStyles;
