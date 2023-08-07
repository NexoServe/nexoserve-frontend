import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import zIndex from '../../../../css/zIndex';

const useStyles = createUseStyles({
  orderNavbarInputLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    lineHeight: '18px',
    marginBottom: base(2),
  },

  orderNavbarInputLabelRequired: {
    color: colors.red,
  },

  orderNavbarDeliveryAddressInput: {
    width: '100%',
    height: base(4),
    padding: `0.75rem`,
    borderRadius: base(0.5),
    marginTop: base(0.5),
    border: `1px solid #e1e1e1`,
    fontSize: '16px',
    background: colors.white,
    boxShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
  },

  orderNavbarDeliveryAddressPopover: {
    zIndex: zIndex.modal,
    borderRadius: base(0.5),
    border: `1px solid #e1e1e1`,
    fontSize: '16px',
    background: colors.white,
    boxShadow:
      '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
  },

  orderNavbarDeliveryAddressOption: {
    padding: base(1),

    '&:hover': {
      background: '#DEEBFF',
    },

    '&[data-reach-combobox-option][aria-selected="true"]': {
      background: '#DEEBFF',
    },
  },
});

export default useStyles;
