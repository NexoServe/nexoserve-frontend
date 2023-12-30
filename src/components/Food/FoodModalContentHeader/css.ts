import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodModalContentHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: base(3),

    '& h3': {
      margin: 0,
      fontSize: '18px',
      lineHeight: '100%',
      color: theme.primary,
    },

    '& span': {
      margin: 0,
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      color: theme.neutral,

      '& svg': {
        marginRight: base(0.5),
      },
    },
  },
}));

export default useStyles;
