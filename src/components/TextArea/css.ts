import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  textArea: {
    height: base(4),
    padding: '0.75rem',
    borderRadius: base(0.5),
    marginTop: base(0.5),
    border: `1px solid ${theme.primary}30`,
    fontSize: '16px',
    background: theme.neutral,
    color: theme.primary,
    maxWidth: '100%',
    width: '100%',
    minWidth: '100%',
    maxHeight: base(15),
    minHeight: base(7),
    marginBottom: base(2),
    boxShadow: `0px 1px 1px ${theme.neutral}03, 0px 3px 6px ${theme.neutral}03`,

    '&::placeholder': {
      color: `${theme.primary}90`,
    },
  },

  textAreaLabel: {
    paddingBottom: base(0.5),
    display: 'block',
    color: theme.primary,
  },
}));

export default useStyles;
