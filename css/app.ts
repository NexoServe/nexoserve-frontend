import { createUseStyles } from 'react-jss';
import { base, baselinePX, htmlFontSize } from './base';
import colors from './colors';
import queries from './queries';
import { body, h1, h2, h3, h4, h5 } from './type';

export default createUseStyles({
  '@global': {
    'html, body': {
      margin: 0,
      color: colors.gray,
    },
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontFamily: 'system-ui, Helvetica Neue, Helvetica, Arial, sans-serif',
      fontSize: htmlFontSize * 0.75,
      lineHeight: `${baselinePX}px`,
      backgroundColor: colors.gray,
      [queries.m]: {
        fontSize: htmlFontSize,
      },
    },
    h1,
    h2,
    h3,
    h4,
    h5,
    p: {
      ...body,
    },
    ol: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    ul: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 ${base()} 0`,
    },
    li: {
      ...body,
    },
  },
  app: {
    height: '100%',
  },
});
