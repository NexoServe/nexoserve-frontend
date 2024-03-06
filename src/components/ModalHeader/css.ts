import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import zIndex from '../../../css/zIndex';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
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
    background: theme.neutral,
    zIndex: zIndex.header,
  },

  modalHeaderTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '22px',
    color: theme.primary,
  },

  modalHeaderCloseButton: {
    padding: base(1),
    display: 'block',
    cursor: 'pointer',
  },
}));

export default useStyles;
