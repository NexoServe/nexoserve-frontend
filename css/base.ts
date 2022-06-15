export const htmlFontSize = 18;

export const baselinePX = 15;

export const base = (multiplier = 1): string =>
  `${(baselinePX / htmlFontSize) * multiplier}rem`;
