import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodOptionRegularStyle: {},

  foodOptionToppingStyle: {
    // display: 'grid',
    // gridTemplateColumns: '1fr 1fr',
    // gap: base(2),
    // minHeight: base(10),
    // alignItems: 'center',
  },

  foodOptionToppingStyleLabel: {
    opacity: 0.5,
    cursor: 'pointer',
    marginTop: base(2),
    display: 'flex',
    alignItems: 'center',

    '& p': {
      width: '100%',
      margin: 0,
      paddingLeft: base(1),
      paddingRight: base(1),
      color: theme.primary,
    },
  },

  foodOptionToppingStyleLabelActive: {
    opacity: 1,
  },

  foodOptionToppingStyleInput: {
    opacity: 0,
    position: 'absolute',
    // width: 0,
    // height: 0,
    overflow: 'hidden',
  },

  foodOptionToppingStyleSizes: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
