import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  orderInfo: {
    [queries.m]: {
      display: 'flex',
      alignItems: 'center',
      width: '20%',
    },

    [queries.l]: {
      width: '25%',
    },

    [queries.xl]: {
      width: '22%',
    },
  },

  orderInfoIcon: {
    width: base(2),
    height: base(2),
  },

  orderInfoStatus: {
    display: 'none',

    [queries.m]: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: base(0.75),
    },

    [queries.xl]: {
      paddingLeft: base(1),
    },
  },

  orderInfoStatusText: {
    fontSize: '14px',
    lineHeight: '16px',

    [queries.xl]: {
      fontSize: '16px',
    },
  },

  orderInfoStatusIcon: {
    minWidth: base(1),
    minHeight: base(1),
    background: colors.green,
    borderRadius: '50%',
    marginLeft: base(0.4),

    [queries.xl]: {
      marginLeft: base(1),
    },
  },
});

export default useStyles;
