import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodModal: {
    position: 'relative',
    overflow: 'hidden',
    height: '85vh',
    maxHeight: base(100),
    width: '95vw',
    maxWidth: base(50),
  },

  foodModalForm: {
    width: '100%',
    background: theme.neutral,
    maxHeight: '100vh',
    height: '100%',
    overflowY: 'auto',
    margin: '0 auto',
    position: 'relative',
    marginTop: `-${base(7)}`,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: base(2),
    overflowX: 'hidden',

    '&::-webkit-scrollbar': {
      background: 'red',
    },

    '&::-webkit-scrollbar-thumb': {
      background: theme.primary,
      width: '5px',
    },

    '&::-webkit-scrollbar-track': {
      background: theme.neutral,
    },
  },

  foodModalLoader: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
