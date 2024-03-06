import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  dropdown: {
    marginBottom: base(2),
  },

  dropdownLabel: {
    marginBottom: base(1),
    display: 'block',
    color: theme.primary,
  },
}));

export default useStyles;
