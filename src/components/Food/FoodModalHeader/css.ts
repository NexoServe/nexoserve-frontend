import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodModalHeaderTitle: {
    fontSize: '24px',
    lineHeight: '100%',
    fontWeight: 600,
    marginTop: base(3),
    marginBottom: base(2),
  },

  foodModalHeaderDescription: {
    fontSize: '16px',
    fontWeight: 400,
    margin: 0,
    marginBottom: base(2),
  },
});

export default useStyles;
