import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
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
    background: colors.secondary,
    maxHeight: '100vh',
    height: '100%',
    overflowY: 'auto',
    margin: '0 auto',
    position: 'relative',
    marginTop: `-${base(7)}`,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: base(2),
  },

  foodModalLoader: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default useStyles;
