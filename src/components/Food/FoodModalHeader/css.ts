import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodModalHeaderTitle: {
    fontSize: '24px',
    lineHeight: '100%',
    fontWeight: 600,
    marginTop: base(3),
    marginBottom: base(2),
    color: theme.primary,
  },

  foodModalHeaderDescription: {
    fontSize: '16px',
    lineHeight: '18px',
    fontWeight: 400,
    margin: 0,
    marginBottom: base(2),
    color: theme.primary,
  },
}));

export default useStyles;
