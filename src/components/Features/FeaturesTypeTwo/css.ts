import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  featuresTypeTwo: {
    backgroundColor: theme.neutral,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  featuresTypeTwoTitle: {
    fontSize: '52px',
    fontWeight: '600',
    paddingTop: base(6),
    textAlign: 'center',
  },

  featuresWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    margin: '40px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    backgroundColor: theme.neutral,
    boxShadow: `0 40px 50px -20px ${theme.neutral}30`,
  },

  featureWrapper: {
    position: 'relative',
    display: 'flex',
    padding: '50px',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '50%',
    minHeight: '100%',

    [queries.l]: {
      padding: '30px',
    },

    [queries.xl]: {
      padding: '40px',
    },
  },

  featuresTypeTwoImage: {
    padding: base(5),
    backgroundColor: theme.accent,
    borderRadius: '50%',
  },

  featureTitle: {
    fontSize: '28px',
    fontWeight: '600',
    lineHeight: '18px',
    marginTop: base(2),
    marginBottom: base(0),
    textAlign: 'center',
    color: theme.primary,
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
