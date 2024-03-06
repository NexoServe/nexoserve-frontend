import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  button: {
    background: theme.accent,
    color: theme.primary,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    outline: 0,
    border: 0,
    borderRadius: base(5),
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
}));

export default useStyles;
