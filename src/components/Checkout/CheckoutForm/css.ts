import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  checkoutFormError: {
    color: theme.tertiary,
    padding: `${base(1)} 0`,
    lineHeight: '18px',
  },

  skeleton: {
    width: '100px',
    height: '100%',

    lineHeight: 1,
  },

  checkoutFormButtonLoader: {
    position: 'absolute',
  },
}));

export default useStyles;
