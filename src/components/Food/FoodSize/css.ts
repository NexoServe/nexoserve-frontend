import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodSize: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: base(2),
    opacity: 0.7,
    cursor: 'pointer',
  },

  foodSizeActive: {
    opacity: 1,
  },

  foodSizeInner: {
    display: 'flex',
    alignItems: 'center',
  },

  foodSizeName: {
    fontSize: '16px',
    margin: 0,
    paddingLeft: base(1),
  },

  foodSizePrice: {
    paddingLeft: base(2),
    margin: 0,
  },
});

export default useStyles;
