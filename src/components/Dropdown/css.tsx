import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';

const useStyles = createUseStyles({
  dropdown: {
    marginBottom: base(2),
  },

  dropdownLabel: {
    marginBottom: base(1),
    display: 'block',
  },
});

export default useStyles;
