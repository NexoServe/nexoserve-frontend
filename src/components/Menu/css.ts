import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  menu: {
    background: theme.neutral,
    width: '100vw',
    height: '100vh',
    paddingTop: base(15),
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    paddingLeft: base(1),

    [queries.l]: {
      flexDirection: 'row',
      width: 'unset',
      height: 'unset',
      paddingTop: 0,
    },
  },

  menuLinkWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [queries.l]: {
      minHeight: '100%',
    },
  },

  menuLink: {
    fontSize: '18px',
    lineHeight: '22px',
    padding: `${base(1)} 0`,
    display: 'block',
    textDecoration: 'none',
    fontWeight: '500',
    maxWidth: base(20),
    margin: `0 auto`,
    color: theme.primary,

    [queries.l]: {
      fontSize: '16px',
      padding: base(1),
    },
  },
}));

export default useStyles;
