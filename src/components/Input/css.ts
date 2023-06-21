import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';

const useStyles = createUseStyles({
  inputLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    lineHeight: '18px',
    marginBottom: base(0.75),
  },

  inputLabelRequired: {
    color: colors.red,
  },

  input: {
    height: base(4),
    padding: `0.75rem`,
    borderRadius: base(0.5),
    marginTop: base(0.5),
    border: `1px solid #e1e1e1`,
    fontSize: '16px',
    background: colors.white,
    boxShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
  },

  inputError: {
    borderColor: colors.red,
    borderWidth: '2px',
  },

  inputErrorMessage: {
    color: colors.red,
    marginBottom: base(1.5),
  },
});

export default useStyles;
