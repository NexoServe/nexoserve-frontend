import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodCard: {
    display: 'flex',
    padding: 0,
    width: '100%',
    height: base(12),
    outline: 'none',
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    borderRadius: base(2),
    background: 'transparent',

    [queries.xs]: {
      height: base(14),
    },

    [queries.m]: {
      height: base(12),
    },
  },

  foodCardImgContainer: {
    position: 'relative',
    borderRadius: base(2),
    minWidth: base(12),
    height: base(12),

    [queries.xs]: {
      minWidth: base(14),
      height: base(14),
    },

    [queries.m]: {
      minWidth: base(12),
      height: base(12),
    },
  },

  foodCardImg: {
    borderRadius: base(2),
  },

  foodCardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: base(1.5),
    width: '100%',
    height: '100%',

    [queries.xs]: {
      padding: base(2),
    },

    [queries.m]: {
      padding: base(1.5),
    },
  },

  foodCardContentName: {
    margin: '0',
    fontSize: '16px',
    lineHeight: '18px',
    fontWeight: '500',
    overflow: 'hidden',
    width: '100%',
    textAlign: 'left',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',

    [queries.xs]: {
      fontSize: '18px',
      lineHeight: '20px',
    },

    [queries.m]: {
      fontSize: '16px',
      lineHeight: '18px',
    },
  },

  foodCardContentDescription: {
    opacity: 0.6,
    textAlign: 'left',
    margin: 0,
    marginTop: base(1),
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '400',
    overflow: 'hidden',
    width: '100%',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',

    [queries.xs]: {
      fontSize: '16px',
      lineHeight: '18px',
    },

    [queries.m]: {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },

  foodCardContentPrice: {
    fontWeight: '700',
    justifySelf: 'flex-end',
    opacity: 0.8,
    fontSize: '14px',
    lineHeight: '16px',
    marginTop: 'auto',

    [queries.xs]: {
      fontSize: '16px',
      lineHeight: '18px',
    },

    [queries.xs]: {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
});

export default useStyles;
