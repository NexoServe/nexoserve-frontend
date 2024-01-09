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
    paddingTop: base(6),
    paddingBottom: base(10),
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
    width: '100%',
    maxWidth: base(160),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: base(4),
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: '8px',
    backgroundColor: theme.neutral,
    boxShadow: `0 40px 50px -20px ${theme.neutral}30`,
  },

  featureWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: base(3),
    minHeight: '100%',
    width: '400px',
    maxWidth: '100%',
    margin: base(3),
  },

  featuresTypeTwoImage: {
    backgroundColor: `${theme.accent}80`,
    maxWidth: '100%',
    borderRadius: '50%',
  },

  featureTitle: {
    fontSize: '28px',
    fontWeight: '600',
    lineHeight: '30px',
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
