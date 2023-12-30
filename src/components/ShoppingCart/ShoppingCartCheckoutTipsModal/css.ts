import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  shoppingCartCheckoutTipsModal: {
    background: theme.neutral,
    width: '80vw',
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
}));

export default useStyles;
