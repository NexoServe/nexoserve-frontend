import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import zIndex from '../../../../css/zIndex';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  orderNavbarInputLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '16px',
    lineHeight: '18px',
    color: theme.primary,
  },

  orderNavbarInputLabelRequired: {
    color: theme.tertiary,
  },

  orderNavbarDeliveryAddressError: {
    color: theme.tertiary,
    padding: `${base(1)} 0`,
    lineHeight: '18px',
  },

  orderNavbarDeliveryAddressInput: {
    width: '100%',
    height: base(4),
    padding: `0.75rem`,
    borderRadius: base(0.5),
    marginTop: base(0.5),
    border: `1px solid ${theme.primary}30`,
    fontSize: '16px',
    background: theme.neutral,
    color: theme.primary,
    boxShadow: `0px 1px 1px ${theme.neutral}03, 0px 3px 6px ${theme.neutral}03`,

    '&::placeholder': {
      color: `${theme.primary}90`,
      fontFamily: 'Montserrat, sans-serif',
    },
  },

  orderNavbarDeliveryAddressPopover: {
    zIndex: zIndex.modal,
    borderRadius: base(0.5),
    border: `1px solid ${theme.neutral}`,
    fontSize: '16px',
    background: theme.neutral,
    boxShadow: `0px 1px 1px ${theme.neutral}03, 0px 3px 6px ${theme.neutral}03`,
  },

  orderNavbarDeliveryAddressOption: {
    padding: base(1),
    background: theme.neutral,
    color: theme.primary,

    '&:hover': {
      background: theme.accent,
    },

    '&[data-reach-combobox-option][aria-selected="true"]': {
      background: theme.accent,
    },
  },
}));

export default useStyles;
