import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
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

  orderInfoStatusIconClosed: {
    background: colors.red,
  },

  orderInfoModal: {
    background: colors.white,
    width: '80vw',
    maxHeight: '80vh',
    overflow: 'auto',
    maxWidth: base(50),
    borderRadius: base(2),
  },

  orderInfoModalContent: {
    padding: base(2),
  },

  orderInfoModalContentName: {
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 600,
    paddingBottom: base(1),
  },

  orderInfoModalContenPhone: {
    fontSize: '16px',
    paddingBottom: base(1.5),
    color: colors.black,
    opacity: 1,
  },

  orderInfoModalContenAddress: {
    fontSize: '16px',
    paddingBottom: base(0.5),
    color: colors.darkGray,
    opacity: 0.8,
  },

  orderInfoModalContenDirections: {
    textDecoration: 'underline',
    padding: `${base(1)} 0`,
    display: 'block',
  },
});

export default useStyles;
