import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodAddOn: {
    position: 'relative',
  },

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
    display: 'grid',
    gridTemplateColumns: `repeat(3, ${base(4)})`,
    justifyContent: 'space-between',
  },

  foodAddOnToppingHeaderInnerLast: {
    textAlign: 'right',
  },
});

export default useStyles;
