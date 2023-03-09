import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodAddOn: {},

  foodAddOnInner: {
    display: 'flex',
    alignItems: 'center',
    gap: base(2),
  },
});

export default useStyles;
