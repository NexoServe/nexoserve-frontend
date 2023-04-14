import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodModal: {
    position: 'relative',
    overflow: 'hidden',
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

    [queries.s]: {
      height: '80vh',
      borderRadius: base(2),
    },
  },

  foodModalCloseBtn: {
    position: 'absolute',
    right: base(1.5),
    top: base(1.5),
    zIndex: 2,
    cursor: 'pointer',
  },

  foodModalImage: {
    minWidth: '100%',
    maxHeight: base(40),
  },

  foodModalContent: {
    padding: `0 ${base(1)}`,
  },

  foodModalChildBorder: {
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    padding: base(1),
    borderRadius: base(1),
    marginBottom: base(2),
  },
});

export default useStyles;
