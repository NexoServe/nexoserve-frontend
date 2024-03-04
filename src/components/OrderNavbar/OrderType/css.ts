import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  orderType: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: base(4),
    borderRadius: base(3),
    padding: base(0.5),
    cursor: 'pointer',
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',

    [queries.xs]: {
      maxHeight: base(6),
      padding: base(1),
    },

    [queries.m]: {
      width: '40%',
    },

    [queries.xl]: {
      width: '35%',
    },
  },

  orderTypeSlider: {
    position: 'absolute',
    height: '100%',
    width: `50%`,
    background: theme.accent,
    transition: 'all 0.3s linear',
    borderRadius: base(2),
  },

  orderTypeToggle: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
  },

  orderTypeToggleButton: {
    zIndex: 1,
    height: '100%',
    position: 'relative',
    width: '100%',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: theme.primary,

    [queries.s]: {
      maxHeight: base(6),
      fontSize: '16px',
    },
  },

  orderTypeToggleButtonUnavailable: {
    fontSize: '10px',

    [queries.xs]: {
      fontSize: '12px',
      paddingRight: base(0.25),
    },

    [queries.s]: {
      paddingLeft: base(1),
      paddingRight: base(1),
    },
  },

  orderTypeIcon: {
    display: 'none',

    [queries.l]: {
      display: 'block',
    },
  },

  orderTypeIconPickUp: {
    marginRight: base(0.5),
    marginTop: `-${base(0.35)}`,
  },

  orderTypeIconDelivery: {
    marginLeft: base(0.5),
  },
}));

export default useStyles;
