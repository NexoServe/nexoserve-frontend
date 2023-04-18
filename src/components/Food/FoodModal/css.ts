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
});

export default useStyles;
