import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';
import queries from '../../../css/queries';
import zIndex from '../../../css/zIndex';

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
    position: 'sticky',
    top: 0,
    background: colors.white,
    zIndex: zIndex.header,

    [queries.l]: {
      background: colors.white,
    },
  },

  modalHeaderTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '22px',
  },

  modalHeaderCloseButton: {
    padding: base(1),
    display: 'block',
    cursor: 'pointer',
  },
});

export default useStyles;
