import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  roundBorder: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    border: `1px solid ${theme.primary}30`,
    borderRadius: base(2),
  },
}));

export default useStyles;
