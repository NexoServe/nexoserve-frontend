import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodSize: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: base(2),
    opacity: 0.7,
    cursor: 'pointer',
  },

  foodSizeActive: {
    opacity: 1,
  },

  foodSizeInner: {
    display: 'flex',
    alignItems: 'center',
  },

  foodSizeName: {
    fontSize: '16px',
    margin: 0,
    paddingLeft: base(1),
    color: theme.primary,
  },

  foodSizePrice: {
    paddingLeft: base(2),
    margin: 0,
    color: theme.primary,
  },
}));

export default useStyles;
