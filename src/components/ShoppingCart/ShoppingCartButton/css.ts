import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  shoppingCartButtonBox: {
    backgroundColor: theme.neutral,
    position: 'sticky',
    bottom: 0,
    left: 0,
    width: '100%',
    height: base(8),
    padding: base(1),
    display: 'block',

    [queries.l]: {
      display: 'none',
    },

    '& button': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
