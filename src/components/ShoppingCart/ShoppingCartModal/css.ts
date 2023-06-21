import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCartModal: {
    width: '100vw',
    height: 'calc(100vh - 30px)',
    position: 'relative',
    marginBottom: '-30px',
    background: colors.secondary,
    borderTopLeftRadius: base(2),
    borderTopRightRadius: base(2),
    display: 'flex',
    justifyContent: 'center',

    [queries.m]: {
      width: '100vw',
      maxWidth: base(50),
      height: '80vh',
      bottom: 'unset',
      position: 'relative',
      borderRadius: base(2),
      marginBottom: 'unset',
    },
  },
});

export default useStyles;
