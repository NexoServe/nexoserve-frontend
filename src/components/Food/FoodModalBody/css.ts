import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodModalBodyImage: {
    width: '100%',
    height: base(40),
    position: 'relative',
    minWidth: '100%',
    maxHeight: base(40),
    minHeight: base(40),
    pointerEvents: 'none',
  },

  foodModalBodyContent: {
    padding: `0 ${base(1)}`,

    [queries.s]: {
      padding: `0 ${base(2)}`,
    },
  },

  foodModalBodyChildBorder: {
    border: `1px solid ${theme.primary}30`,
    padding: base(1.5),
    borderRadius: base(1),
    marginBottom: base(2),

    [queries.s]: {
      padding: base(2),
    },
  },

  foodModalBodyChildBorderRequired: {
    boxShadow: 'red 0px 0px 20px -12px',
    background: 'red',
    display: 'none',
  },
}));

export default useStyles;
