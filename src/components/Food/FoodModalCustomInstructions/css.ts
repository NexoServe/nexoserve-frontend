import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodModalCustomInstructionsTextarea: {
    backgroundColor: theme.neutral,
    color: theme.primary,
    maxWidth: '100%',
    minWidth: '100%',
    minHeight: '125px',
    maxHeight: '125px',
    padding: base(2),
    outline: 'none',
    border: `1px solid ${theme.primary}30`,
    borderRadius: base(1),

    '&::placeholder': {
      color: `${theme.primary}90`,
    },
  },
}));

export default useStyles;
