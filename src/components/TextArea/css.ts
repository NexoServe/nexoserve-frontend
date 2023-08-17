import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';

const useStyles = createUseStyles({
  textArea: {
    height: base(4),
    padding: '0.75rem',
    borderRadius: base(0.5),
    marginTop: base(0.5),
    border: '1px solid #e1e1e1',
    fontSize: '16px',
    background: colors.white,
    maxWidth: '100%',
    width: '100%',
    minWidth: '100%',
    maxHeight: base(15),
    minHeight: base(7),
    marginBottom: base(2),
    boxShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
  },

  textAreaLabel: {
    paddingBottom: base(0.5),
    display: 'block',
  },
});

export default useStyles;
