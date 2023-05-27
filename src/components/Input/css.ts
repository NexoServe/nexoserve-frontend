import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';

const useStyles = createUseStyles({
  inputLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    lineHeight: '18px',
    fontWeight: 500,
    marginBottom: base(1),
  },

  inputLabelRequired: {
    color: colors.red,
  },
  input: {
    height: base(4),
    padding: `0 ${base(1)}`,
    borderRadius: base(1),
    marginTop: base(0.5),
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    background: colors.white,
  },
});

export default useStyles;
