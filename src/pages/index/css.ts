import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  homeHeroContainer: {
    width: '100%',
    paddingTop: base(15),
    paddingBottom: base(10),
    // height: `calc(100vh - ${base(6)} - 1px)`,
    backgroundPosition: '0% 0%, 40% 0%',
    overflowX: 'hidden',
    position: 'relative',
  },

  homeHeroForeground: {
    objectPosition: 'left',
    position: 'absolute',

    [queries.s]: {
      objectPosition: '35% center',
    },

    [queries.xl]: {
      objectPosition: '50% center',
    },
  },

  homeHero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    minHeight: '100%',
    maxWidth: base(160),
    width: '100%',
    padding: base(2),
    paddingBottom: base(20),
    margin: '0 auto',
    position: 'relative',
    overflowX: 'hidden',
  },

  homeHeroTitle: {
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

  homeHeroDescription: {
    fontSize: '18px',
    fontWeight: '500',
    opacity: 0.5,
    marginTop: base(2),
    marginBottom: base(2),
    lineHeight: '18px',
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

  homeHeroButtonContainer: {
    display: 'flex',
    justifyContent: 'center',

    [queries.s]: {
      justifyContent: 'flex-start',
    },
  },

  homeHeroButton: {
    padding: `${base(1)} ${base(2)}`,
    height: base(6),
    maxWidth: base(30),
    marginTop: base(2),
    backgroundColor: theme.accent,
  },

  homeHeroSocials: {
    position: 'absolute',
    bottom: base(2),
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: base(160),

    [queries.l]: {
      justifyContent: 'flex-start',
      paddingLeft: base(2),
    },
  },

  homeHeroSocial: {
    marginLeft: base(1),
    marginRight: base(1),
  },

  homeHeroScroll: {
    position: 'absolute',
    bottom: base(4),
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'none',

    [queries.l]: {
      display: 'block',
    },
  },

  features: {
    backgroundColor: theme.neutral,
  },

  featuresWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '40px 16px',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: theme.neutral,
    boxShadow: `0 40px 50px -20px ${theme.neutral}30`,

    [queries.l]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },

  featureWrapper: {
    position: 'relative',
    display: 'flex',
    padding: '50px',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: ' 8px',
    backgroundColor: theme.neutral,
    minHeight: '100%',

    [queries.l]: {
      padding: '30px',
    },

    [queries.xl]: {
      padding: '40px',
    },
  },

  featureTitle: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '700',
    marginTop: base(2),
    marginBottom: base(0),
    textAlign: 'center',
    color: theme.primary,

    [queries.xl]: {
      fontSize: '16px',
    },
  },

  featureMessage: {
    fontSize: '14px',
    lineHeight: '18px',
    opacity: 0.6,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: base(0),
    color: theme.primary,

    [queries.xl]: {
      fontSize: '16px',
    },
  },

  aboutUs: {
    backgroundColor: `${theme.accent}30`,
    paddingTop: base(6),

    [queries.l]: {
      paddingBottom: base(8),
    },
  },

  aboutUsWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    maxWidth: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingRight: '16px',
    paddingLeft: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',

    [queries.xl]: {
      flexDirection: 'row',
    },
  },

  aboutUsContent: {
    width: '100%',

    [queries.xl]: {
      width: '50%',
    },
  },

  aboutUsImage: {
    borderTopLeftRadius: base(8),
    borderBottomRightRadius: base(2),
    overflow: 'hidden',
  },

  aboutUsTitle: {
    fontSize: '30px',
    fontWeight: '600',
    marginBottom: 0,
    color: theme.primary,

    [queries.l]: {
      marginTop: 0,
    },

    [queries.xl]: {
      fontSize: '36px',
    },
  },

  aboutUsMessage: {
    fontSize: '16px',
    lineHeight: '18px',
    fontWeight: '500',
    opacity: 0.5,
    marginBottom: base(2),
    marginTop: base(1),
    color: theme.primary,

    [queries.xl]: {
      fontSize: '18px',
      lineHeight: '26px',
    },
  },

  imageGridWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  imageGrid: {
    display: 'grid',
    width: '100%',
    height: '596px',
    gridAutoColumns: '1fr',
    gridColumnGap: '16px',
    gridRowGap: '16px',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',

    [queries.xl]: {
      width: '50%',
      height: '480px',
      marginTop: '60px',
      order: 1,
      marginLeft: base(4),
    },
  },

  largeImage1: {
    borderRadius: '8px',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    overflow: 'hidden',
  },

  smallImage1: {
    width: '100%',
    height: '244px',
    maxWidth: '244px',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: '8px',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignSelf: 'end',
    overflow: 'hidden',

    [queries.xl]: {
      height: '180px',
    },
  },

  largeImage2: {
    borderRadius: '8px',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    overflow: 'hidden',
  },

  smallImage2: {
    width: '100%',
    height: '244px',
    maxWidth: '244px',
    borderRadius: '8px',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    justifySelf: 'end',
    overflow: 'hidden',

    [queries.xl]: {
      height: '180px',
    },
  },
}));

export default useStyles;
