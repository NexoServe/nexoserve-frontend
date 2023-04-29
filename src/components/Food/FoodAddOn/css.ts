import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodAddOn: {},

  foodAddOnInner: {
    display: 'flex',
    alignItems: 'center',
    gap: base(2),
  },

  foodAddOnToppingHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: base(2),
    padding: `${base(2)} 0`,
  },

  foodAddOnToppingHeaderInner: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default useStyles;
