import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
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
    // backgroundImage:
    //   'url(https://us-east-menu-images.s3.amazonaws.com/labella_large.png)',
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
