import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodModalNav: {
    height: base(7),
    width: '100%',
    maxWidth: '100vw',
    background: theme.neutral,
    position: 'sticky',
    top: 0,
    zIndex: 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0 ${base(1)}`,
    overflow: 'hidden',
    pointerEvents: 'none',
    borderTopLeftRadius: base(2),
    borderTopRightRadius: base(2),

    [queries.s]: {
      paddingLeft: base(2),
      maxWidth: '500px',
    },

    '& h1': {
      fontSize: '24px',
      lineHeight: '100%',
      fontWeight: 600,
      margin: 0,
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 1,
      '-webkit-box-orient': 'vertical',
      color: theme.primary,
    },
  },
}));

export default useStyles;
