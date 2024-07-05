import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  heroTypeOneContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundPosition: '0% 0%, 40% 0%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',

    [queries.l]: {
      height: `calc(100vh - ${base(10)})`,
    },
  },

  heroTypeOneForeground: {
    objectPosition: 'left',

    [queries.s]: {
      objectPosition: '30% center',
    },

    [queries.xl]: {
      objectPosition: '50% center',
    },
  },

  heroTypeOne: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    maxWidth: base(160),
    width: '100%',
    padding: base(2),
    paddingTop: base(10),
    paddingBottom: base(20),
    margin: '0 auto',
    position: 'relative',
    overflowX: 'hidden',

    [queries.l]: {
      height: '100%',
    },
  },

  heroTypeOneTitle: {
    fontWeight: '800',
    maxWidth: base(60),
    marginBottom: 0,
    textAlign: 'center',
    fontSize: '36px',
    lineHeight: '38px',
    color: theme.primary,

    [queries.s]: {
      textAlign: 'left',
      maxWidth: base(34),
    },

    [queries.l]: {
      fontSize: '40px',
      lineHeight: '42px',
      maxWidth: base(40),
    },

    [queries.xl]: {
      fontSize: '48px',
      lineHeight: '50px',
      maxWidth: base(44),
    },
  },

  heroTypeOneDescription: {
    fontSize: '18px',
    fontWeight: '500',
    opacity: 0.5,
    marginTop: base(2),
    marginBottom: base(2),
    lineHeight: '22px',
    maxWidth: base(50),
    textAlign: 'center',
    color: theme.primary,

    [queries.s]: {
      textAlign: 'left',
      maxWidth: base(34),
    },

    [queries.l]: {
      maxWidth: base(40),
    },
  },

  heroTypeOneButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: base(2),

    [queries.s]: {
      maxWidth: base(34),
      alignItems: 'flex-start',
    },
  },

  heroTypeOneButtonMessage: {
    color: theme.primary,
    fontSize: '14px',
    lineHeight: '14px',
    textAlign: 'center',
    opacity: 0.5,

    [queries.s]: {
      textAlign: 'left',
    },
  },

  heroTypeOneButton: {
    padding: `${base(1)} ${base(2)}`,
    maxWidth: base(30),
    height: base(6),
    marginTop: base(1),
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

    [queries.l]: {
      justifyContent: 'flex-start',
      paddingLeft: base(2),
    },
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
