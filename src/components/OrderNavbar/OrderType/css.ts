import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
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

    [queries.s]: {
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
    background: colors.primary,
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

    [queries.s]: {
      maxHeight: base(6),
      fontSize: '16px',
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
});

export default useStyles;
