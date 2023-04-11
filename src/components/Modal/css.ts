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
  },

  modalClose: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    //TODO: pick one of these
    // backgroundImage:
    //   'linear-gradient(to bottom, #000000, #000000 50%, #010101)',
    // backgroundBlendMode: 'overlay',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    zIndex: zIndex.modal,
    cursor: 'pointer',
  },

  modalInner: {
    position: 'relative',
    zIndex: zIndex.modal + 1,
  },
});

export default useStyles;
