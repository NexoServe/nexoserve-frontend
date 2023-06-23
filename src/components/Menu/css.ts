import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';

const useStyles = createUseStyles({
  menu: {
    background: colors.white,
    width: '100vw',
    height: '100vh',
    paddingTop: base(10),
    display: 'flex',
    flexDirection: 'column',
    margin: 0,

    [queries.l]: {
      flexDirection: 'row',
      width: 'unset',
      height: 'unset',
      paddingTop: 0,
    },
  },

  menuLink: {
    fontSize: '22px',
    lineHeight: '22px',
    padding: `${base(1)} 0`,
    display: 'block',
    textDecoration: 'none',

    [queries.l]: {
      fontSize: '16px',
      padding: base(1),
    },
  },
});

export default useStyles;
