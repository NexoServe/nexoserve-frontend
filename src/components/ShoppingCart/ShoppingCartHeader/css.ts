import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  shoppingCartHeader: {
    width: '100%',
    height: base(6),
    padding: base(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: colors.white,
    borderTopLeftRadius: base(2),
    borderTopRightRadius: base(2),
  },

  shoppingCartHeaderTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '500',
  },
  shoppingCartHeaderButton: {
    padding: base(1),
  },
});

export default useStyles;
