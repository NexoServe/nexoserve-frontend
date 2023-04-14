import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodModalNav: {
    height: base(7),
    width: '100%',
    background: colors.white,
    position: 'sticky',
    top: 0,
    zIndex: 2,
    transform: `translateY(-100%)`,
    transition: 'all 0.2s ease-in-out',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0 ${base(1)}`,
    paddingRight: base(1.5),
    overflow: 'hidden',
    pointerEvents: 'none',
    opacity: 0,

    [queries.s]: {
      borderTopLeftRadius: base(2),
      borderTopRightRadius: base(2),
    },

    '& h1': {
      fontSize: '24px',
      lineHeight: '100%',
      fontWeight: 600,
      margin: 0,
    },
  },

  foodModalNavActive: {
    position: 'sticky',
    transform: `translateY(0)`,
    height: base(7),
    pointerEvents: 'all',
    opacity: 1,
  },
});

export default useStyles;
