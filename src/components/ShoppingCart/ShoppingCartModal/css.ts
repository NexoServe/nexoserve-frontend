import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  shoppingCartModal: {
    width: '95vw',
    height: '85vh',
    position: 'relative',
    background: theme.neutral,
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
}));

export default useStyles;
