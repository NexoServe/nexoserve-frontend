import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  divider: {
    width: '100%',
    height: base(0.1),
    background: theme.primary,
    opacity: 0.1,
  },
}));

export default useStyles;
