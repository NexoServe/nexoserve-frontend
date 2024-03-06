import { atom } from 'recoil';

export const LoaderAtom = atom<string>({
  key: 'LoaderAtom',
  default: undefined,
});
