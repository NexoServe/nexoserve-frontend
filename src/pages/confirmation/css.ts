import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';

const useStyles = createUseStyles({
  confirmation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmationTitle: {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: base(1),
    textAlign: 'center',
    lineHeight: '26px',
  },

  confirmationContent: {
    fontSize: '16px',
    opacity: 0.5,
    textAlign: 'center',
  },

  confirmationButton: {
    marginTop: base(3),
    marginBottom: base(2),
    padding: base(2),
    maxWidth: base(40),
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    cursor: 'pointer',
  },
});

export default useStyles;
