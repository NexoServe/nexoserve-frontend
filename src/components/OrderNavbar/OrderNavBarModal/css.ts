import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  orderNavbarModal: {
    background: colors.white,
    overflow: 'auto',
    width: '95vw',
    maxHeight: '80vh',
    borderRadius: base(2),

    [queries.s]: {
      width: '80vw',
      maxWidth: base(50),
    },
  },

  orderNavbarModalContent: {
    padding: `${base(2)}`,
    paddingTop: base(3),
  },

  orderNavbarModalButton: {
    height: base(6),
    marginTop: base(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderNavbarModalError: {
    color: colors.red,
    fontSize: '16px',
    lineHeight: '18px',
    paddingBottom: base(3),
  },
});

export default useStyles;
