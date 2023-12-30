import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  orderInfoModal: {
    background: theme.neutral,
    width: '95vw',
    maxHeight: '80vh',
    overflow: 'auto',
    maxWidth: base(50),
    borderRadius: base(2),
  },

  orderInfoModalContent: {
    padding: base(2),
  },

  orderInfoModalContentInner: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: base(2),
    justifyContent: 'space-between',
  },

  orderInfoModalContentName: {
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 600,
    paddingBottom: base(1),
    color: theme.primary,
  },

  orderInfoModalContentPhone: {
    fontSize: '14px',
    paddingBottom: base(1.5),
    color: theme.primary,
    opacity: 1,
    textDecoration: 'underline',
    display: 'flex',
    flexDirection: 'column',
  },

  orderInfoModalContentAddress: {
    fontSize: '16px',
    lineHeight: '18px',
    paddingBottom: base(0.5),
    color: theme.primary,
    opacity: 0.8,
    textAlign: 'right',
  },

  orderInfoModalContentDirections: {
    textDecoration: 'underline',
    padding: `${base(1)} 0`,
    display: 'block',
    marginBottom: base(1.5),
    textAlign: 'right',
  },

  orderInfoModalHoursTitle: {
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: 600,
    marginBottom: base(1),
    marginTop: base(1.5),
    color: theme.primary,
  },

  orderInfoHoursTabButton: {
    width: base(8),
    fontSize: '16px',
    textAlign: 'left',
    cursor: 'pointer',
    background: theme.neutral,
    padding: `${base(1)} 0`,
    color: theme.primary,
  },

  orderInfoHoursTabs: {
    background: theme.neutral,
  },

  orderInfoHoursTabButtonDivider: {
    width: '1px',
    height: '100%',
    color: theme.primary,
  },

  orderInfoHoursTabUnderline: {
    width: base(7),
    height: '3px',
    borderRadius: '10px',

    backgroundColor: theme.primary,
  },

  orderInfoHoursTabContent: {
    marginTop: base(0.75),
  },

  orderInfoHoursTabContentItem: {
    display: 'flex',
    fontSize: '14px',
    justifyContent: 'space-between',
    padding: `${base(1)} 0`,
    opacity: 0.8,
    color: theme.primary,
  },

  orderInfoHoursTabContentItemActive: {
    fontWeight: 700,
  },
}));

export default useStyles;
