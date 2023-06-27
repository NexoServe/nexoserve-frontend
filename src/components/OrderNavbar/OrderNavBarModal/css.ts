import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  shoppingCartCheckoutTipsModal: {
    background: colors.white,
    width: '80vw',
    maxHeight: '80vh',
    overflow: 'auto',
    maxWidth: base(50),
    borderRadius: base(2),
  },

  shoppingCartCheckoutTipsModalContent: {
    padding: `${base(2)}`,
    paddingTop: base(3),
  },

  shoppingCartCheckoutTipsModalButton: {
    height: base(6),
    marginTop: base(2),
  },
});

export default useStyles;
