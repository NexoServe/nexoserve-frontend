import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';
import zIndex from '../../../css/zIndex';

const useStyles = createUseStyles({
  navbar: {
    background: colors.white,
    position: 'relative',
    zIndex: zIndex.header,
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

  navbarCounter: {
    border: '1px solid black',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',
    marginRight: '1rem',
  },

  navbarLogo: {
    height: base(4),
    width: base(8),
    background: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    fontWeight: '700',
    borderRadius: base(1),
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
});

export default useStyles;
