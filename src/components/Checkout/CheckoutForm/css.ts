import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  checkoutFormError: {
    color: colors.red,
    padding: `${base(1)} 0`,
  },

  skeleton: {
    width: '100px',
    height: '100%',

    lineHeight: 1,
  },
});

export default useStyles;
