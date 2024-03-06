import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  footer: {
    backgroundColor: theme.primary,
    paddingTop: base(10),
  },

  footerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1000px',
    margin: '0 auto',

    [queries.m]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },

  footerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: base(3),
  },

  footerTitle: {
    color: theme.neutral,
    fontSize: '16px',
    margin: 0,
    textAlign: 'center',
    marginBottom: base(2),
    fontWeight: 600,
  },

  footerNav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerNavLink: {
    color: theme.neutral,
    fontSize: '16px',
    margin: 0,
    textAlign: 'center',
    marginBottom: base(2),
    textDecoration: 'none',

    '&:hover': {
      color: theme.accent,
    },
  },

  footerOpeningHours: {
    maxWidth: '300px',
    margin: '0 auto',

    [queries.m]: {
      minWidth: '250px',
    },
  },

  footerOpeningHourRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: `${base(2)} 0`,
  },

  footerOpeningHourWeekDay: {
    fontSize: '16px',
    color: theme.neutral,
    paddingRight: base(3),
  },

  footerOpeningHourText: {
    fontSize: '16px',
    color: theme.neutral,
  },

  footerPhoneWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  footerPhone: {
    display: 'flex',
    alignItems: 'center',
    padding: `${base(1)} 0`,
    textDecoration: 'none',

    '&:hover': {
      color: theme.accent,
    },
  },

  footerPhoneNumber: {
    color: theme.neutral,
    paddingLeft: base(0.5),

    '&:hover': {
      color: theme.accent,
    },
  },

  footerCopyright: {
    paddingTop: base(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: base(2),
  },

  footerCopyrightText: {
    color: theme.neutral,
    textAlign: 'center',
    paddingTop: base(2),
  },
}));

export default useStyles;
