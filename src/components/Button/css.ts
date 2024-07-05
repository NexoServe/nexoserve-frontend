import { tss } from 'tss-react';

import { base } from '../../../css/base';
import { ThemeType } from '../../../generated/graphql';

const useStyles = tss
  .withParams<{ theme: ThemeType }>()
  .create(({ theme }) => ({
    button: {
      background: theme?.accent,
      color: theme?.primary,
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
