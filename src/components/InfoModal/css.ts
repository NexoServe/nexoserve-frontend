import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import { ThemeType } from '../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  infoModal: {
    width: '90vw',
    maxWidth: '500px',
    maxHeight: '600px',
    borderRadius: base(2),
    background: theme.neutral,
    overflow: 'auto',
  },
  infoModalBody: {
    padding: base(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoModalBodyMessage: {
    textAlign: 'left',
    width: '100%',
    fontWeight: 500,
    lineHeight: '20px',
    color: theme.primary,
  },

  infoModalBodyList: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: base(4),
    paddingTop: base(2),

    '& li': {
      marginBottom: base(1),
      lineHeight: '20px',
    },
  },

  infoModalBodyShowMoreBtn: {
    fontSize: '16px',
    fontWeight: 500,
    marginTop: base(2),
    marginBottom: base(2),
    textDecoration: 'underline',
  },

  infoModalBodyResetBtn: {
    marginLeft: base(1),
    padding: `${base(0.5)} ${base(1.5)}`,
    backgroundColor: theme.tertiary,
    color: theme.neutral,
    borderRadius: base(1),
  },
}));

export default useStyles;
