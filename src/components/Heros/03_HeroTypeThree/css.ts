import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  heroTypeThreeContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: '0% 0%, 40% 0%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'relative',
    paddingBottom: base(6),

    [queries.l]: {
      height: `calc(100vh - ${base(10)})`,
      flexDirection: 'row',
    },
  },

  heroTypeThree: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    maxWidth: base(160),
    margin: '0 auto',
    padding: base(2),
    position: 'relative',
    overflowX: 'hidden',

    [queries.m]: {
      height: '100%',
      paddingLeft: base(3),
    },

    [queries.l]: {
      flexDirection: 'row',
      zIndex: 2,
    },
  },

  heroTypeThreeInner: {},

  heroTypeThreeTitle: {
    marginBottom: 0,
    fontWeight: '700',
    textAlign: 'left',
    fontSize: '32px',
    lineHeight: '40px',
    paddingBottom: base(1),
    color: theme.primary,
    paddingLeft: base(1),
    paddingRight: base(1),

    [queries.l]: {
      fontSize: '52px',
      lineHeight: '54px',
    },
  },

  heroTypeThreeDescription: {
    fontSize: '16px',
    fontWeight: '500',
    marginTop: base(2),
    marginBottom: base(2),
    lineHeight: '24px',
    opacity: 0.5,
    textAlign: 'left',
    color: theme.primary,
    paddingLeft: base(1),
    paddingRight: base(2),
    maxWidth: base(160),

    [queries.l]: {
      maxWidth: base(80),
    },
  },

  heroTypeThreeButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: base(1),
    paddingLeft: base(1),
    paddingRight: base(1),
  },

  heroTypeThreeButtonMessage: {
    color: theme.primary,
    fontSize: '14px',
    lineHeight: '14px',
    textAlign: 'left',
    paddingRight: base(2),
    opacity: 0.5,
  },

  heroTypeThreeButton: {
    padding: `${base(1)} ${base(2)}`,
    maxWidth: base(30),
    height: base(6),
    marginTop: base(1),
    backgroundColor: theme.accent,
  },

  heroTypeThreeBackgroundContainer: {
    paddingTop: '50px',
    paddingBottom: '100px',
    paddingLeft: '20px',
    paddingRight: '20px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',

    [queries.l]: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingBottom: '0px',
      minWidth: '50%',
    },

    [queries.xxl]: {
      marginLeft: base(10),
    },
  },

  heroTypeThreeBackgroundImage: {
    width: '300px',
    maxWidth: '100%',
    height: '300px',
    position: 'relative',
    borderRadius: '30px',
    overflow: 'hidden',
    transform:
      'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-2deg) skew(0deg, 0deg)',
    zIndex: 2,
    marginTop: base(6),

    [queries.s]: {
      width: '400px',
      height: '400px',
    },

    [queries.m]: {
      width: '500px',
      height: '500px',
    },
  },

  heroTypeThreeBackground: {
    width: '100%',
    height: '40%',
    backgroundColor: theme.accent,
    position: 'absolute',
    bottom: '0',
    left: '0',

    [queries.l]: {
      height: '100%',
      width: '40%',
      left: 'auto',
      right: '0',
    },
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
    zIndex: 2,
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
