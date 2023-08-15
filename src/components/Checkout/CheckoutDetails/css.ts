import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  checkoutDetails: {
    padding: `0 ${base(2)}`,
    maxHeight: '100%',

    [queries.l]: {
      height: 'auto',
    },
  },

  checkoutDetailsOrderType: {
    height: base(6),
    marginTop: base(1),
    marginBottom: base(1),
    display: 'flex',
    justifyContent: 'flex-start',

    [queries.s]: {
      marginBottom: base(4),
    },
  },

  checkoutDetailsContentItem: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '40px 1fr 60px',
  },

  checkoutDetailsHeader: {
    gridColumn: '1/3',
    display: 'flex',
    alignItems: 'center',
    marginBottom: base(1),
  },

  checkoutDetailsIcon: {
    width: base(4),
    display: 'flex',
    justifyContent: 'flex-end',
  },

  checkoutDetailsContentItemTitle: {
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 500,
    margin: 0,
    marginLeft: base(1),
    textAlign: 'left',
  },

  checkoutDetailsBody: {
    gridColumn: '2/3',
    marginLeft: base(1),

    '& div': {
      fontSize: '16px',
      opacity: 0.8,
      marginBottom: base(0.75),
      textAlign: 'left',
      lineHeight: '18px',
    },
  },

  checkoutDetailsLink: {
    gridColumn: '2/3',
    textDecoration: 'underline',
    marginLeft: base(5),
    marginTop: base(1),
    textAlign: 'left',
  },

  checkoutDetailsButton: {
    gridColumn: '3/4',
    gridRow: '1/4',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',

    '& div': {
      fontWeight: 600,
      fontSize: '16px',
    },
  },
});

export default useStyles;
