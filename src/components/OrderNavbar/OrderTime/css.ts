import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  orderTime: {
    width: '40%',

    [queries.xs]: {
      width: '35%',
    },

    [queries.m]: {
      width: '30%',
    },
  },

  orderTimeContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: base(4),
    borderRadius: base(3),
    padding: base(0.75),
    cursor: 'pointer',
    width: '100%',

    [queries.xs]: {
      padding: base(2),
      maxHeight: base(6),
      paddingLeft: base(1.25),
    },

    [queries.s]: {
      maxHeight: base(6),
      padding: base(2),
    },
  },

  orderTimeIcon: {
    display: 'none',

    [queries.l]: {
      display: 'block',
      width: base(4),
      height: base(4),
      paddingRight: base(1),
    },
  },

  orderTimeInner: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: '14px',
    paddingLeft: base(0.25),

    [queries.s]: {
      fontSize: '16px',
    },

    [queries.xl]: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },

  orderTimeLabel: {
    fontSize: '12px',
    fontWeight: 600,

    [queries.xl]: {
      fontSize: '16px',
      paddingBottom: 0,
      paddingRight: base(0.5),
    },
  },

  orderTimeIconArrow: {
    transform: 'rotate(180deg)',
  },
});

export default useStyles;
