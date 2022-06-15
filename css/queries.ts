import breakpoints from './breakpoints';

export const xs = `@media(min-width: ${breakpoints.xs}px)`;

export const s = `@media(min-width: ${breakpoints.s}px)`;

export const m = `@media(min-width: ${breakpoints.m}px)`;

export const l = `@media(min-width: ${breakpoints.l}px)`;

export const xl = `@media(min-width: ${breakpoints.xl}px)`;

export const xxl = `@media(min-width: ${breakpoints.xxl}px)`;

const queries = {
  xs,
  s,
  m,
  l,
  xl,
  xxl,
};

export default queries;
