import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodModalContentHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: base(3),

    '& h3': {
      margin: 0,
      fontSize: '18px',
      lineHeight: '100%',
    },

    '& span': {
      margin: 0,
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',

      '& svg': {
        marginRight: base(0.5),
      },
    },
  },
});

export default useStyles;
