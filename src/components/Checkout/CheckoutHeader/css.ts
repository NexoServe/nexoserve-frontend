import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  checkoutHeader: {
    height: base(6),
    display: 'flex',
    alignItems: 'center',
  },

  checkoutHeaderTitle: {
    margin: 0,
    fontSize: '20px',
    lineHeight: '22px',
    fontWeight: '500',
  },
});

export default useStyles;
