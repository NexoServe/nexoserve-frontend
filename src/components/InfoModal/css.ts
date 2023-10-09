import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import colors from '../../../css/colors';

const useStyles = createUseStyles({
  infoModal: {
    width: '90vw',
    maxWidth: '500px',
    maxHeight: '600px',
    borderRadius: base(2),
    background: colors.white,
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
    backgroundColor: colors.red,
    color: colors.white,
    borderRadius: base(1),
  },
});

export default useStyles;
