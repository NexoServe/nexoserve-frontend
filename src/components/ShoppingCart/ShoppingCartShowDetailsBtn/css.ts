import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  shoppingCartShowDetailsBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: base(2),

    '& button': {
      fontSize: '14px',
      fontWeight: 400,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      '& span': {
        marginLeft: base(1),
      },
    },
  },
});

export default useStyles;
