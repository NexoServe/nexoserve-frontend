import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';

const useStyles = createUseStyles({
  footer: {
    backgroundColor: colors.black,
    backgroundImage: `linear-gradient(0deg, rgba(98,98,98,0.95) 0%, rgba(98,98,98,0.95) 100%), url("https://us-east-menu-images.s3.amazonaws.com/igli_7_put_pizza_on_the_right_4dc04a34-8daf-4f76-85c0-0c904cfe5fbd+(2)+(1).png")`,
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
    color: colors.secondary,
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
    color: colors.white,
    fontSize: '16px',
    margin: 0,
    textAlign: 'center',
    marginBottom: base(2),
    textDecoration: 'none',

    '&:hover': {
      color: colors.primary,
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
    color: colors.white,
    paddingRight: base(3),
  },

  footerOpeningHourText: {
    fontSize: '16px',
    color: colors.white,
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
      color: colors.primary,
    },
  },

  footerPhoneNumber: {
    color: colors.white,
    paddingLeft: base(0.5),

    '&:hover': {
      color: colors.primary,
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
    color: colors.white,
    textAlign: 'center',
    paddingTop: base(2),
  },
});

export default useStyles;
