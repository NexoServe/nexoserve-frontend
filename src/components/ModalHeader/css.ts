import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';

const useStyles = createUseStyles({
  modalHeader: {
    width: '100%',
    height: base(6),
    padding: base(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: base(2),
    borderTopRightRadius: base(2),
    position: 'relative',

    [queries.l]: {
      background: colors.white,
    },
  },

  modalHeaderTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '500',
  },

  modalHeaderCloseButton: {
    padding: base(1),
    display: 'block',
    cursor: 'pointer',
  },
});

export default useStyles;
