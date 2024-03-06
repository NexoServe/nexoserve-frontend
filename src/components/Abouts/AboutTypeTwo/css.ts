import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  aboutUsTypeTwo: {
    backgroundColor: `${theme.accent}30`,

    [queries.l]: {
      paddingBottom: base(8),
    },
  },

  aboutUsTwoWrapper: {
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

  imageGrid: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: `-${base(6)}`,
    marginBottom: base(6),
  },

  largeImage1: {
    borderRadius: '8px',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    overflow: 'hidden',
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
    fontSize: '40px',
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
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: base(2),
    marginTop: base(4),
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
}));

export default useStyles;
