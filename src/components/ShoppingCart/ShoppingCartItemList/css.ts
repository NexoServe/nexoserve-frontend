import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCartItemList: {
    padding: `0 ${base(2)}`,
    overflowY: 'auto',
    flexGrow: 1,
    maxHeight: '100%',
    height: '100%',

    // [queries.m]: {
    //   height: '60vh',
    //   maxHeight: base(60),
    // },
  },

  shoppingCartItemListShowDetails: {
    display: 'flex',

    [queries.l]: {
      display: 'none',
    },
  },

  shoppingCartItemListEmpty: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
    padding: `${base(3)} 0`,

    '& p': {
      fontSize: '20px',
      lineHeight: '22px',
      fontWeight: 500,
      textAlign: 'center',
      maxWidth: base(30),
      margin: '0 auto',
      marginTop: base(3),
    },
  },
});

export default useStyles;
