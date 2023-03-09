import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodItem: {
    display: 'flex',
    gap: base(1),
  },
});

export default useStyles;
