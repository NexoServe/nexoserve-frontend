import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  shoppingCartItemList: {
    padding: `0 ${base(2)}`,
    overflowY: 'auto',
    flexGrow: 1,
    maxHeight: '100%',
    height: '100%',
  },

  shoppingCartItemListShowDetails: {
    display: 'flex',

    [queries.l]: {
      display: 'none',
    },
  },

  shoppingCartItemListShowDetailsChecked: {
    display: 'none',
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
    marginTop: `-${base(5)}`,
  },

  shoppingCartItemListEmptySvg: {
    maxHeight: base(30),

    [queries.xs]: {
      maxHeight: base(40),
    },
  },

  shoppingCartItemListEmptyText: {
    fontSize: '20px',
    lineHeight: '22px',
    fontWeight: 500,
    textAlign: 'center',
    maxWidth: base(30),
    margin: '0 auto',
    paddingTop: base(2),
    marginTop: `-${base(8)}`,
    color: theme.primary,
  },
}));

export default useStyles;
