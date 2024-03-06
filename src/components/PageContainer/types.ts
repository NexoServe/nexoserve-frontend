import { ThemeType } from '../../../generated/graphql';

export interface IPageContainer {
  children: React.ReactNode;
  theme: ThemeType;
}
