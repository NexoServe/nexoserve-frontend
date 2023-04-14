import { createUseStyles } from 'react-jss';

import { base, baselinePX, htmlFontSize } from './base';
import colors from './colors';
import queries from './queries';
import { body, h1, h2, h3, h4, h5 } from './type';

export default createUseStyles({
  '@global': {
    // '@import':
    //   "url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')",
    'html, body': {
      margin: 0,
      color: colors.black,
    },

    '*': {
      boxSizing: 'border-box',
      color: colors.black,
    },
    html: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      backgroundColor: colors.secondary,
      [queries.m]: {
        fontSize: htmlFontSize,
      },
    },
    body: {
      padding: `0`,
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
    '.focus-visible': {
      outline: `2px solid blue`,
    },

    button: {
      fontFamily: 'Montserrat, sans-serif',
      border: 0,
      margin: 0,
      padding: 0,
      backgroundColor: 'transparent',
    },

    input: {
      fontFamily: 'Montserrat, sans-serif',
    },
  },

  app: {
    height: '100%',
  },
});
