import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  shoppingCart: {
    position: 'relative',
    width: '100%',
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    borderRadius: base(2),
    display: 'flex',
    flexDirection: 'column',
  },
});

export default useStyles;
