import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';

const useStyles = createUseStyles({
  divider: {
    width: '100%',
    height: base(0.1),
    background: colors.black,
    opacity: 0.1,
  },
});

export default useStyles;
