import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';
import zIndex from '../../../css/zIndex';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  navbar: {
    background: theme.neutral,
    position: 'relative',
    zIndex: zIndex.header,
  },

  navbarLogo: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    paddingTop: base(1.5),
    paddingBottom: base(1.5),

    [queries.l]: {
      paddingTop: base(2),
      paddingBottom: base(2),
    },
  },

  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    height: base(6),

    [queries.l]: {
      height: base(8),
    },
  },

  navbarHamburger: {
    display: 'block',

    [queries.l]: {
      display: 'none',
    },
  },

  navbarModalOverlay: {
    zIndex: zIndex.header - 1,
  },

  navbarMenuMobile: {
    display: 'flex',
    paddingRight: base(1),

    [queries.l]: {
      display: 'none',
    },
  },

  navbarMenuDesktop: {
    display: 'none',

    [queries.l]: {
      display: 'flex',
    },
  },
}));

export default useStyles;
