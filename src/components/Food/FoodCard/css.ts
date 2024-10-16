import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodCard: {
    display: 'flex',
    padding: 0,
    width: '100%',
    height: base(12),
    border: `1px solid ${theme.primary}20`,
    borderRadius: base(2),
    background: 'transparent',

    [queries.m]: {
      height: base(12),
    },
  },

  foodCardImgContainer: {
    position: 'relative',
    borderRadius: base(2),
    minWidth: base(12),
    height: base(12),

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
    color: theme.primary,

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
    color: theme.primary,

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
    color: theme.primary,

    [queries.xs]: {
      fontSize: '14px',
      lineHeight: '16px',
    },
  },
}));

export default useStyles;
