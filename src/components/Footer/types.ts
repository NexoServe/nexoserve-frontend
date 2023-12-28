import { DayOutput, PhoneNumberType } from '../../../generated/graphql';

export interface IFooter {
  openingHours: DayOutput[];
  phoneNumbers: PhoneNumberType[];
  restaurantName: string;
}
