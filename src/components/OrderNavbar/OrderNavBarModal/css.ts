import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  orderNavbarModal: {
    background: colors.white,
    width: '80vw',
    maxHeight: '80vh',
    overflow: 'auto',
    maxWidth: base(50),
    borderRadius: base(2),
  },

  orderNavbarModalContent: {
    padding: `${base(2)}`,
    paddingTop: base(3),
  },

  orderNavbarModalButton: {
    height: base(6),
    marginTop: base(2),
  },

  orderNavbarModalError: {
    color: colors.red,
    fontSize: '16px',
    lineHeight: '18px',
    paddingBottom: base(3),
  },
});

export default useStyles;
