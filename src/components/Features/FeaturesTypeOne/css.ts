import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
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
}));

export default useStyles;
