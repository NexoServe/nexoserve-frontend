import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';

const useStyles = createUseStyles({
  button: {
    background: colors.primary,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    outline: 0,
    border: 0,
    borderRadius: base(5),
    fontSize: '16px',
    fontWeight: '600',
  },
});

export default useStyles;
