import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  orderInfoModal: {
    background: colors.white,
    width: '80vw',
    maxHeight: '80vh',
    overflow: 'auto',
    maxWidth: base(50),
    borderRadius: base(2),
  },

  orderInfoModalContent: {
    padding: base(2),
  },

  orderInfoModalContentName: {
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 600,
    paddingBottom: base(1),
  },

  orderInfoModalContentPhone: {
    fontSize: '16px',
    paddingBottom: base(1.5),
    color: colors.black,
    opacity: 1,
  },

  orderInfoModalContentAddress: {
    fontSize: '16px',
    paddingBottom: base(0.5),
    color: colors.darkGray,
    opacity: 0.8,
  },

  orderInfoModalContentDirections: {
    textDecoration: 'underline',
    padding: `${base(1)} 0`,
    display: 'block',
    marginBottom: base(1.5),
  },

  orderInfoModalHoursTitle: {
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 600,
    marginBottom: base(1),
    marginTop: base(1.5),
  },

  orderInfoHoursTabButton: {
    width: base(8),
    fontSize: '16px',
    textAlign: 'left',
    cursor: 'pointer',
    background: colors.secondary,
    padding: `${base(1)} 0`,
  },

  orderInfoHoursTabs: {
    background: colors.secondary,
  },

  orderInfoHoursTabButtonDivider: {
    width: '1px',
    height: '100%',
    color: colors.black,
  },

  orderInfoHoursTabUnderline: {
    width: base(7),
    height: '3px',
    borderRadius: '10px',

    backgroundColor: colors.black,
  },

  orderInfoHoursTabContent: {
    marginTop: base(0.75),
  },

  orderInfoHoursTabContentItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${base(1)} 0`,
    opacity: 0.8,
  },
});

export default useStyles;
