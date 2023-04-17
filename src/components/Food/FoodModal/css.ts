import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodModal: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',

    [queries.s]: {
      height: '80vh',
    },
  },

  foodModalForm: {
    width: '100vw',
    maxWidth: base(50),
    background: colors.secondary,
    maxHeight: '100vh',
    height: '100%',
    overflowY: 'auto',
    margin: '0 auto',
    position: 'relative',
    marginTop: `-${base(7)}`,
    display: 'flex',
    flexDirection: 'column',

    [queries.s]: {
      height: '80vh',
      borderRadius: base(2),
    },
  },

  foodModalLoader: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  foodModalImage: {
    minWidth: '100%',
    maxHeight: base(40),
    pointerEvents: 'none',
  },

  foodModalContent: {
    padding: `0 ${base(1)}`,

    [queries.s]: {
      padding: `0 ${base(2)}`,
    },
  },

  foodModalChildBorder: {
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    padding: base(1),
    borderRadius: base(1),
    marginBottom: base(2),
  },
});

export default useStyles;
