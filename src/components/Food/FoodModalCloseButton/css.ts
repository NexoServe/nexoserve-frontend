import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodModalCloseBtnContainer: {
    width: '100%',
    height: base(7),
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },

  foodModalCloseBtn: {
    position: 'absolute',
    right: base(2),
    top: base(1.5),
    zIndex: 2,
    cursor: 'pointer',
  },
});

export default useStyles;
