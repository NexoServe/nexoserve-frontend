import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  heroTypeTwoContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundPosition: '0% 0%, 40% 0%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    marginTop: `-${base(8.1)}`,

    [queries.l]: {
      height: `100vh`,
      marginTop: `-${base(10.1)}`,
    },
  },

  heroTypeTwoForeground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: `${theme.primary}99`,
  },

  heroTypeTwo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingTop: base(20),
    paddingBottom: base(20),
    margin: '0 auto',
    position: 'relative',
    overflowX: 'hidden',

    [queries.l]: {
      height: '100%',
    },
  },

  heroTypeTwoTitle: {
    marginBottom: 0,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '42px',
    lineHeight: '48px',
    color: theme.neutral,
    paddingLeft: base(1),
    paddingRight: base(1),

    [queries.l]: {
      fontSize: '52px',
      lineHeight: '54px',
    },

    [queries.xl]: {
      fontSize: '72px',
      lineHeight: '82px',
      paddingLeft: base(20),
      paddingRight: base(20),
    },

    [queries.xxl]: {
      paddingLeft: base(25),
      paddingRight: base(25),
    },
  },

  heroTypeTwoDescription: {
    fontSize: '18px',
    fontWeight: '500',
    marginTop: base(2),
    marginBottom: base(2),
    lineHeight: '22px',
    textAlign: 'center',
    color: theme.neutral,
    paddingLeft: base(2),
    paddingRight: base(2),

    [queries.l]: {
      maxWidth: base(80),
    },
  },

  heroTypeOneButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: base(4),

    // [queries.s]: {
    //   maxWidth: base(34),
    //   alignItems: 'flex-start',
    // },
  },

  heroTypeOneButtonMessage: {
    color: theme.neutral,
    fontSize: '14px',
    lineHeight: '14px',
    textAlign: 'center',
    paddingLeft: base(2),
    paddingRight: base(2),
    opacity: 0.5,
  },

  heroTypeTwoButton: {
    padding: `${base(1)} ${base(2)}`,
    maxWidth: base(30),
    height: base(6),
    marginTop: base(2),
    backgroundColor: theme.accent,
  },

  heroTypeOneSocials: {
    position: 'absolute',
    bottom: base(4),
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  heroTypeOneSocial: {
    marginLeft: base(1),
    marginRight: base(1),
  },

  heroTypeOneScroll: {
    position: 'absolute',
    bottom: base(4),
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'none',

    [queries.l]: {
      display: 'block',
    },
  },
}));

export default useStyles;
