import { atom } from 'recoil';

import { RestaurantType } from '../../generated/graphql';

export const RestaurantDetailsAtom = atom<RestaurantType>({
  key: 'RestaurantDetailsAtom',
  default: undefined,
});
