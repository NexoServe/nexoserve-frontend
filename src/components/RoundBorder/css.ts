import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';

const useStyles = createUseStyles({
  roundBorder: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    borderRadius: base(2),
  },
});

export default useStyles;
