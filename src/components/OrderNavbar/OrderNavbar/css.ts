import { createUseStyles } from 'react-jss';

import colors from '../../../../css/colors';
import zIndex from '../../../../css/zIndex';

const useStyles = createUseStyles({
  orderNavbar: {
    background: colors.white,
    position: 'sticky',
    top: 0,
    zIndex: zIndex.header - 1,
  },

  orderNavbarContainer: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default useStyles;
