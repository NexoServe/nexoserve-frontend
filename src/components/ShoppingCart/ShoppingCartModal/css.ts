import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCartModal: {
    width: '95vw',
    height: '85vh',
    position: 'relative',
    background: colors.secondary,
    borderRadius: base(2),
    display: 'flex',
    justifyContent: 'center',

    [queries.m]: {
      width: '100vw',
      maxWidth: base(50),
      height: '80vh',
      bottom: 'unset',
      position: 'relative',
      borderRadius: base(2),
    },
  },
});

export default useStyles;
