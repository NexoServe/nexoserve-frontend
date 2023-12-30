import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  checkoutHeader: {
    height: base(6),
    display: 'flex',
    alignItems: 'center',
  },

  checkoutHeaderTitle: {
    margin: 0,
    fontSize: '20px',
    lineHeight: '22px',
    fontWeight: '500',
    color: theme.primary,
  },
}));

export default useStyles;
