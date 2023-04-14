import { createUseStyles } from 'react-jss';

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
    flexDirection: 'column',
  },

  modalClose: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: zIndex.modal,
    cursor: 'pointer',
  },

  modalInner: {
    position: 'relative',
    zIndex: zIndex.modal + 1,
    width: 'max-content',
  },
});

export default useStyles;
