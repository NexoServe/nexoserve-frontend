import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  inputLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    lineHeight: '18px',
    marginBottom: base(2),
    color: theme.primary,
  },

  inputLabelRequired: {
    color: theme.tertiary,
  },

  input: {
    height: base(4),
    padding: `0.75rem`,
    borderRadius: base(0.5),
    marginTop: base(0.5),
    border: `1px solid ${theme.primary}30`,
    color: theme.primary,
    fontSize: '16px',
    background: theme.neutral,
    boxShadow: `0px 1px 1px ${theme.neutral}03, 0px 3px 6px ${theme.neutral}03`,

    '&::placeholder': {
      color: `${theme.primary}90`,
    },
  },

  inputError: {
    borderColor: theme.tertiary,
    borderWidth: '2px',
  },

  inputErrorMessage: {
    color: theme.tertiary,
    marginBottom: base(1.5),
  },
}));

export default useStyles;
