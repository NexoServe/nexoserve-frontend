import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodModalFooter: {
    position: 'sticky',
    bottom: 0,
    minHeight: base(7),
    marginTop: 'auto',
    width: '100%',
    background: theme.neutral,
    zIndex: 2,
    padding: base(1),
    display: 'grid',
    gridTemplateColumns: '0.75fr 1.25fr',
    columnGap: base(1),
    borderBottomLeftRadius: base(2),
    borderBottomRightRadius: base(2),
  },

  foodModalFooterQuantityContainer: {
    display: 'grid',
    gridTemplateColumns: '0.75fr 1.5fr 0.75fr',
    backgroundColor: `${theme.primary}10`,
    borderRadius: base(5),
    padding: `0 ${base(0.5)}`,
    columnGap: base(1),

    [queries.xs]: {
      padding: `0 ${base(1)}`,
    },
  },

  foodModalFooterButton: {
    cursor: 'pointer',
  },

  foodModalFooterQuantity: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 600,
    background: 'transparent',
    border: 'none',
    outlineColor: 'transparent',
    color: theme.primary,

    [queries.xs]: {
      fontSize: '20px',
    },

    [queries.s]: {
      fontSize: '24px',
    },

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-webkit-appearance': 'textfield',
      '-moz-appearance': 'textfield',
    },
  },
}));

export default useStyles;
