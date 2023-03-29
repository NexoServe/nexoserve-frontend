import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  shoppingCartItemList: {
    padding: base(2),
  },

  shoppingCartItemListShowDetails: {
    display: 'flex',
    justifyContent: 'flex-end',

    '& button': {
      fontSize: '14px',
      fontWeight: 400,
      display: 'flex',
      alignItems: 'center',

      '& span': {
        marginLeft: base(1),
      },
    },
  },
});

export default useStyles;
