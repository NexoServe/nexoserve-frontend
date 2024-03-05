import {
  DayOutput,
  PhoneNumberType,
  ThemeType,
} from '../../../generated/graphql';

export interface IFooter {
  openingHours: DayOutput[];
  phoneNumbers: PhoneNumberType[];
  restaurantName: string;
  theme: ThemeType;
  email: string;
}
