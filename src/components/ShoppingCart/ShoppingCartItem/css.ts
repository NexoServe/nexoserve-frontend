import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  shoppingCartItem: {
    display: 'grid',
    gridTemplateColumns: `${base(3)} 1fr ${base(3)}`,
    gridTemplateRows: `auto auto`,
    columnGap: base(2),
    padding: `${base(2)} 0`,
    maxWidth: '100%',
    width: '100%',
    cursor: 'pointer',
  },

  shoppingCartItemQuantity: {
    width: base(3),
    height: base(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `${base(0.1)} solid ${theme.primary}`,
    color: theme.primary,
    borderRadius: '50%',

    '& span': {
      fontSize: '14px',
      fontWeight: 500,
    },
  },

  shoppingCartItemContent: {
    gridColumn: '2/4',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    color: theme.primary,
  },

  shoppingCartItemTitle: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '18px',
    margin: 0,
    paddingRight: base(2),
    textAlign: 'left',
  },

  shoppingCartItemPrice: {
    fontSize: '14px',
    fontWeight: 400,
  },

  shoppingCartItemDetails: {
    gridColumn: '1/4',
    columnGap: base(2),
    gridTemplateColumns: `${base(3)} 1fr ${base(3)}`,
    display: 'grid',
  },

  shoppingCartItemDetailsInner: {
    gridColumn: '2/3',
    fontSize: '14px',
    lineHeight: '16px',
    textAlign: 'left',
    paddingBottom: base(2),
  },

  shoppingCartItemDetailsItem: {
    position: 'relative',
    marginBottom: base(1),
    minHeight: base(2),
    display: 'flex',
    alignItems: 'center',
    color: theme.primary,

    '& span': {
      position: 'absolute',
      fontSize: '12px',
      left: `-${base(2.5)}`,
      background: theme.accent,
      width: base(2),
      height: base(2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
    },
  },

  shoppingCartItemDetailsItemSize: {
    fontSize: '14px',
    fontWeight: 600,
    marginTop: base(1.5),
    paddingBottom: base(0.5),
    color: theme.primary,
  },

  shoppingCartItemDetailsItemSizeItem: {
    paddingLeft: base(1),
    paddingTop: base(0.5),
    paddingBottom: base(0.5),
    color: theme.primary,
  },

  shoppingCartItemDeleteButton: {
    gridColumn: '3/4',
    gridRow: '1/4',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    '& button': {
      display: 'flex',
      cursor: 'pointer',
    },
  },

  shoppingCartItemEditButton: {
    gridColumn: '1/3',
    gridRow: '3/4',
    display: 'flex',

    '& button': {
      fontSize: '14px',
      fontWeight: 500,
      textDecoration: 'underline',
      cursor: 'pointer',
      color: theme.primary,
    },
  },
}));

export default useStyles;
