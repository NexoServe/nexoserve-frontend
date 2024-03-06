import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  orderInfo: {
    cursor: 'pointer',

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
    color: theme.primary,

    [queries.xl]: {
      fontSize: '16px',
    },
  },

  orderInfoStatusIcon: {
    minWidth: base(1),
    minHeight: base(1),
    background: theme.secondary,
    borderRadius: '50%',
    marginLeft: base(0.4),

    [queries.xl]: {
      marginLeft: base(1),
    },
  },

  orderInfoStatusIconClosed: {
    background: theme.tertiary,
  },
}));

export default useStyles;
