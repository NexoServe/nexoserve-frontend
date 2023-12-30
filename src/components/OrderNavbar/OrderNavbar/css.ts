import { createUseStyles } from 'react-jss';

import zIndex from '../../../../css/zIndex';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  orderNavbar: {
    background: theme.neutral,
    position: 'sticky',
    top: 0,
    zIndex: zIndex.header - 1,
  },

  orderNavbarContainer: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export default useStyles;
