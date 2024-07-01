import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
};

export type AboutUsType = {
  __typename?: 'AboutUsType';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageFour?: Maybe<Scalars['String']['output']>;
  imageOne?: Maybe<Scalars['String']['output']>;
  imageThree?: Maybe<Scalars['String']['output']>;
  imageTwo?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AddOnSimple = {
  __typename?: 'AddOnSimple';
  id?: Maybe<Scalars['String']['output']>;
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AddOnType = {
  __typename?: 'AddOnType';
  foods?: Maybe<Array<Maybe<FoodType>>>;
  id?: Maybe<Scalars['String']['output']>;
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  maxOptionsSelected?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Maybe<OptionType>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum AddOnTypeEnum {
  PizzaTopping = 'PIZZA_TOPPING',
  Regular = 'REGULAR'
}

export type BaseFood = {
  __typename?: 'BaseFood';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
};

export type CreateAddOnInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  isRequired: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  options: Array<CreateOptionInput>;
};

export type CreateFoodInput = {
  addOns?: InputMaybe<Array<CreateAddOnInput>>;
  category: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  restaurantId: Scalars['String']['input'];
  sizes?: InputMaybe<Array<CreateFoodSizeInput>>;
};

export type CreateFoodSizeInput = {
  addOns: Array<CreateAddOnInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateOptionInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  optionSizes?: InputMaybe<Array<OptionSizeInput>>;
  price: Scalars['Float']['input'];
};

export type CreateOrderInput = {
  deliveryAddress?: InputMaybe<Scalars['String']['input']>;
  deliveryDetails?: InputMaybe<Scalars['String']['input']>;
  guestEmail?: InputMaybe<Scalars['String']['input']>;
  guestFirstName?: InputMaybe<Scalars['String']['input']>;
  guestLastName?: InputMaybe<Scalars['String']['input']>;
  guestPhone?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPickUp: Scalars['Boolean']['input'];
  isTipPercentage: Scalars['Boolean']['input'];
  orderItems: Array<OrderItemInput>;
  orderTime: Scalars['String']['input'];
  restaurantId: Scalars['String']['input'];
  suiteAptFloor?: InputMaybe<Scalars['String']['input']>;
  tip: Scalars['Float']['input'];
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  clientSecret: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  stripeStatus: Scalars['String']['output'];
  total: Scalars['Float']['output'];
};

export type CreateOrderResponse = {
  __typename?: 'CreateOrderResponse';
  data?: Maybe<CreateOrderOutput>;
  error?: Maybe<ErrorType>;
};

export type DayInput = {
  dayOfWeek: Scalars['String']['input'];
  time: Array<TimeInput>;
};

export type DayOutput = {
  __typename?: 'DayOutput';
  dayOfWeek: Scalars['String']['output'];
  time: Array<TimeOutput>;
};

export enum DeliveryFulfilledByEnum {
  Doordash = 'DOORDASH',
  InHouse = 'IN_HOUSE'
}

export enum ErrorCodes {
  InvalidDeliveryAddress = 'INVALID_DELIVERY_ADDRESS',
  InvalidDeliveryMinimum = 'INVALID_DELIVERY_MINIMUM',
  InvalidOrderTime = 'INVALID_ORDER_TIME',
  StripePaymentError = 'STRIPE_PAYMENT_ERROR',
  StripeRequiresAction = 'STRIPE_REQUIRES_ACTION'
}

export type ErrorType = {
  __typename?: 'ErrorType';
  /** A unique error code. */
  code?: Maybe<Scalars['String']['output']>;
  /** Additional data related to the error. */
  data?: Maybe<Scalars['JSON']['output']>;
  /** A human-readable error message. */
  message?: Maybe<Scalars['String']['output']>;
};

export type FeatureItemType = {
  __typename?: 'FeatureItemType';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FeatureType = {
  __typename?: 'FeatureType';
  id?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<FeatureItemType>>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type FoodSize = {
  __typename?: 'FoodSize';
  addOns?: Maybe<Array<Maybe<AddOnType>>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type FoodType = {
  __typename?: 'FoodType';
  addOns?: Maybe<Array<Maybe<AddOnType>>>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Float']['output']>;
  sizes?: Maybe<Array<Maybe<FoodSize>>>;
  startDate?: Maybe<Scalars['String']['output']>;
};

export type FoodWithSizesType = {
  __typename?: 'FoodWithSizesType';
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sizes?: Maybe<Array<Maybe<FoodSize>>>;
  startDate?: Maybe<Scalars['String']['output']>;
};

export type FoodsByCategoryType = {
  __typename?: 'FoodsByCategoryType';
  category: Scalars['String']['output'];
  foods?: Maybe<Array<FoodWithSizesType>>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type HeroType = {
  __typename?: 'HeroType';
  background?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  foreground?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ImageType = {
  __typename?: 'ImageType';
  id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type LocationInput = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddActiveRestaurantToUser: Scalars['Boolean']['output'];
  CreateOrder: CreateOrderResponse;
  RemoveActiveRestaurantFromUser: Scalars['Boolean']['output'];
  RemoveCanceledOrderFromList: Scalars['Boolean']['output'];
  ReprintTicket: Scalars['Boolean']['output'];
  UpdateOrderStatus: Scalars['Boolean']['output'];
};


export type MutationAddActiveRestaurantToUserArgs = {
  restaurantId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCreateOrderArgs = {
  order: CreateOrderInput;
  paymentMethodId: Scalars['String']['input'];
};


export type MutationRemoveActiveRestaurantFromUserArgs = {
  restaurantId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationRemoveCanceledOrderFromListArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationReprintTicketArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationUpdateOrderStatusArgs = {
  orderId: Scalars['String']['input'];
  status: OrderStatusEnum;
};

export type OpeningHour = {
  __typename?: 'OpeningHour';
  closeTime: Scalars['String']['output'];
  dayOfWeek: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  openTime: Scalars['String']['output'];
  restaurantId: Scalars['Int']['output'];
};

export type OptionSizeInput = {
  default?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type OptionSizeType = {
  __typename?: 'OptionSizeType';
  default?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
};

export type OptionSizeWithOption = {
  __typename?: 'OptionSizeWithOption';
  default?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  option: OptionType;
  price: Scalars['Float']['output'];
  sort?: Maybe<Scalars['Int']['output']>;
};

export type OptionType = {
  __typename?: 'OptionType';
  default?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  optionSizes?: Maybe<Array<Maybe<OptionSizeType>>>;
  price?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type OptionWithSizeInput = {
  addOnName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  optionSizeId?: InputMaybe<Scalars['String']['input']>;
};

export type OptionWithSizeType = {
  __typename?: 'OptionWithSizeType';
  addOnName: Scalars['String']['output'];
  default?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  optionSize?: Maybe<OptionSizeType>;
  price?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type OptionsGroupedByAddOnType = {
  __typename?: 'OptionsGroupedByAddOnType';
  addOnName: Scalars['String']['output'];
  isFoodSizeAddOn?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<Maybe<OptionType>>>;
  optionsGroupedByOptionSize?: Maybe<Array<Maybe<OptionsGroupedByOptionSizeType>>>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type OptionsGroupedByOptionSizeType = {
  __typename?: 'OptionsGroupedByOptionSizeType';
  optionSizeName: Scalars['String']['output'];
  options?: Maybe<Array<Maybe<OptionWithSizeType>>>;
  price?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
};

export type OrderDetailsInput = {
  deliveryAddress?: InputMaybe<Scalars['String']['input']>;
  deliveryAddressAdditionalInfo?: InputMaybe<Scalars['String']['input']>;
  deliveryDetails?: InputMaybe<Scalars['String']['input']>;
  isPickUp: Scalars['Boolean']['input'];
  orderTime: Scalars['String']['input'];
  restaurantId: Scalars['String']['input'];
};

export type OrderDetailsType = {
  __typename?: 'OrderDetailsType';
  currentDateTime: Scalars['String']['output'];
  deliveryAddress?: Maybe<Scalars['String']['output']>;
  deliveryAddressAdditionalInfo?: Maybe<Scalars['String']['output']>;
  deliveryDetails?: Maybe<Scalars['String']['output']>;
  isDeliveryAddressValid: Scalars['Boolean']['output'];
  isOpenNowDelivery: Scalars['Boolean']['output'];
  isOpenNowPickUp: Scalars['Boolean']['output'];
  isOrderTimeValid: Scalars['Boolean']['output'];
  isPickUp: Scalars['Boolean']['output'];
};

export type OrderItemInput = {
  customInstructions?: InputMaybe<Scalars['String']['input']>;
  foodId: Scalars['String']['input'];
  foodSizeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<InputMaybe<OptionWithSizeInput>>>;
  quantity: Scalars['Int']['input'];
};

export type OrderItemOutput = {
  __typename?: 'OrderItemOutput';
  food: FoodWithSizesType;
  foodSize?: Maybe<FoodSize>;
  id: Scalars['String']['output'];
  options?: Maybe<Array<Maybe<OptionWithSizeType>>>;
  quantity: Scalars['Int']['output'];
  total: Scalars['Float']['output'];
};

export type OrderItemType = {
  __typename?: 'OrderItemType';
  customInstructions?: Maybe<Scalars['String']['output']>;
  food: FoodWithSizesType;
  foodSize?: Maybe<FoodSize>;
  id: Scalars['String']['output'];
  options?: Maybe<Array<Maybe<OptionWithSizeType>>>;
  quantity: Scalars['Int']['output'];
  total: Scalars['Float']['output'];
};

export type OrderItemWithGroupedOptionsType = {
  __typename?: 'OrderItemWithGroupedOptionsType';
  customInstructions?: Maybe<Scalars['String']['output']>;
  food: FoodWithSizesType;
  foodSize?: Maybe<FoodSize>;
  id: Scalars['String']['output'];
  optionsGroupedByAddOn?: Maybe<Array<Maybe<OptionsGroupedByAddOnType>>>;
  quantity: Scalars['Int']['output'];
  total: Scalars['Float']['output'];
};

export enum OrderStatusEnum {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotPaid = 'NOT_PAID',
  Ready = 'READY'
}

export type OrderType = {
  __typename?: 'OrderType';
  applicationFee?: Maybe<Scalars['Float']['output']>;
  canceledOrderRemoveList: Scalars['Boolean']['output'];
  deliveryAddress?: Maybe<Scalars['String']['output']>;
  deliveryDetails?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Float']['output']>;
  deliveryFulfilledBy?: Maybe<DeliveryFulfilledByEnum>;
  deliveryFulfilledFee?: Maybe<Scalars['Float']['output']>;
  deliveryTrackingUrl?: Maybe<Scalars['String']['output']>;
  estimatedCompletionTime: Scalars['String']['output'];
  guestEmail?: Maybe<Scalars['String']['output']>;
  guestFirstName?: Maybe<Scalars['String']['output']>;
  guestLastName?: Maybe<Scalars['String']['output']>;
  guestPhone?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isASAP: Scalars['Boolean']['output'];
  orderItems?: Maybe<Array<OrderItemType>>;
  orderNumber: Scalars['String']['output'];
  orderStatus: OrderStatusEnum;
  orderType: OrderTypeEnum;
  placementTime: Scalars['String']['output'];
  stripePaymentId?: Maybe<Scalars['String']['output']>;
  subTotal: Scalars['Float']['output'];
  suiteAptFloor?: Maybe<Scalars['String']['output']>;
  tax: Scalars['Float']['output'];
  tip: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export enum OrderTypeEnum {
  Delivery = 'DELIVERY',
  PickUp = 'PICK_UP'
}

export type OrderWithOrderItemWithGroupedOptionsType = {
  __typename?: 'OrderWithOrderItemWithGroupedOptionsType';
  canceledOrderRemoveList: Scalars['Boolean']['output'];
  deliveryAddress?: Maybe<Scalars['String']['output']>;
  deliveryDetails?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Float']['output']>;
  estimatedCompletionTime: Scalars['String']['output'];
  guestEmail?: Maybe<Scalars['String']['output']>;
  guestFirstName?: Maybe<Scalars['String']['output']>;
  guestLastName?: Maybe<Scalars['String']['output']>;
  guestPhone?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isASAP: Scalars['Boolean']['output'];
  orderItems?: Maybe<Array<OrderItemWithGroupedOptionsType>>;
  orderNumber: Scalars['Int']['output'];
  orderStatus: OrderStatusEnum;
  orderType: OrderTypeEnum;
  placementTime: Scalars['String']['output'];
  restaurant: RestaurantSimpleType;
  subTotal: Scalars['Float']['output'];
  suiteAptFloor?: Maybe<Scalars['String']['output']>;
  tax: Scalars['Float']['output'];
  tip: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
};

export type PhoneNumberType = {
  __typename?: 'PhoneNumberType';
  id?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  addOns: Array<Maybe<AddOnType>>;
  foodById: FoodType;
  foodsByCategory: Array<Maybe<FoodsByCategoryType>>;
  order: OrderType;
  orders: Array<OrderWithOrderItemWithGroupedOptionsType>;
  restaurant: RestaurantOutput;
  restaurantDetails: RestaurantDetailsOutput;
  todaysOrders: Array<OrderType>;
  validateOrderDetails: ValidateOrderDetailsOutput;
  validateShoppingCart: ShoppingCart;
};


export type QueryFoodByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryOrdersArgs = {
  restaurantIds: Array<Scalars['String']['input']>;
};


export type QueryRestaurantArgs = {
  input: OrderDetailsInput;
};


export type QueryRestaurantDetailsArgs = {
  restaurantId: Scalars['String']['input'];
};


export type QueryTodaysOrdersArgs = {
  restaurantId: Scalars['String']['input'];
};


export type QueryValidateOrderDetailsArgs = {
  input: OrderDetailsInput;
};


export type QueryValidateShoppingCartArgs = {
  order: CreateOrderInput;
};

export type RestaurantDetailsOutput = {
  __typename?: 'RestaurantDetailsOutput';
  aboutUs?: Maybe<AboutUsType>;
  address: Scalars['String']['output'];
  deliveryFulfilledBy: DeliveryFulfilledByEnum;
  domainUrl: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favicon: Scalars['String']['output'];
  feature?: Maybe<FeatureType>;
  gallery?: Maybe<Array<Maybe<ImageType>>>;
  hero?: Maybe<HeroType>;
  loader: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  measurementId: Scalars['String']['output'];
  metaDescription: Scalars['String']['output'];
  name: Scalars['String']['output'];
  navbarType: Scalars['String']['output'];
  ogImage: Scalars['String']['output'];
  openingHours: Array<DayOutput>;
  phoneNumbers: Array<PhoneNumberType>;
  socialMedia?: Maybe<SocialMediaType>;
  theme: ThemeType;
};

export type RestaurantOutput = {
  __typename?: 'RestaurantOutput';
  orderDetails: OrderDetailsType;
  restaurantDetails: RestaurantType;
};

export type RestaurantSimpleType = {
  __typename?: 'RestaurantSimpleType';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
};

export type RestaurantType = {
  __typename?: 'RestaurantType';
  address: Scalars['String']['output'];
  deliveryFee: Scalars['Float']['output'];
  deliveryMinimum: Scalars['Float']['output'];
  deliveryOffset: Scalars['Int']['output'];
  deliveryOpeningHours: Array<DayOutput>;
  id: Scalars['String']['output'];
  location: Location;
  menu: Array<FoodsByCategoryType>;
  name: Scalars['String']['output'];
  openStatusMessage: Scalars['String']['output'];
  phoneNumbers: Array<PhoneNumberType>;
  pickUpOffset: Scalars['Int']['output'];
  pickUpOpeningHours: Array<DayOutput>;
  printerMacAddress: Scalars['String']['output'];
  radius: Scalars['Float']['output'];
  services: Array<Scalars['String']['output']>;
  timezone: Scalars['String']['output'];
};

export type ShoppingCart = {
  __typename?: 'ShoppingCart';
  deliveryFee?: Maybe<Scalars['Float']['output']>;
  grandTotal?: Maybe<Scalars['Float']['output']>;
  orderItems: Array<Maybe<OrderItemType>>;
  subTotal: Scalars['Float']['output'];
  tax?: Maybe<Scalars['Float']['output']>;
  tip?: Maybe<Scalars['Float']['output']>;
};

export type ShoppingCartItemType = {
  __typename?: 'ShoppingCartItemType';
  customInstructions?: Maybe<Scalars['String']['output']>;
  food?: Maybe<FoodWithSizesType>;
  orderItemId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  selectedOptions?: Maybe<Array<Maybe<OptionWithSizeType>>>;
  selectedSize?: Maybe<FoodSize>;
};

export type SimpleFoodSize = {
  __typename?: 'SimpleFoodSize';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

export type SocialMediaType = {
  __typename?: 'SocialMediaType';
  facebookUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  instagramUrl?: Maybe<Scalars['String']['output']>;
  xTwitterUrl?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderCreated: OrderWithOrderItemWithGroupedOptionsType;
};


export type SubscriptionOrderCreatedArgs = {
  restaurantIds: Array<Scalars['String']['input']>;
};

export type ThemeType = {
  __typename?: 'ThemeType';
  accent: Scalars['String']['output'];
  neutral: Scalars['String']['output'];
  primary: Scalars['String']['output'];
  secondary: Scalars['String']['output'];
  tertiary: Scalars['String']['output'];
};

export type TimeInput = {
  closes_at?: InputMaybe<Scalars['String']['input']>;
  opens_at?: InputMaybe<Scalars['String']['input']>;
};

export type TimeOutput = {
  __typename?: 'TimeOutput';
  closes_at?: Maybe<Scalars['String']['output']>;
  opens_at?: Maybe<Scalars['String']['output']>;
};

export type UserRestaurantType = {
  __typename?: 'UserRestaurantType';
  restaurantId: Scalars['String']['output'];
  restaurantName: Scalars['String']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  activeRestaurants: Array<UserRestaurantType>;
  allRestaurants: Array<UserRestaurantType>;
};

export type ValidateOrderDetailsOutput = {
  __typename?: 'ValidateOrderDetailsOutput';
  orderDetails: OrderDetailsType;
  restaurantDetails: RestaurantType;
};

export type CreateOrderMutationVariables = Exact<{
  order: CreateOrderInput;
  paymentMethodId: Scalars['String']['input'];
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', CreateOrder: { __typename?: 'CreateOrderResponse', data?: { __typename?: 'CreateOrderOutput', orderId: string, total: number, clientSecret: string, stripeStatus: string } | null, error?: { __typename?: 'ErrorType', code?: string | null, message?: string | null, data?: any | null } | null } };

export type AddOnFieldsFragment = { __typename?: 'AddOnType', id?: string | null, name?: string | null, isRequired?: boolean | null, maxOptionsSelected?: number | null, type?: string | null, options?: Array<{ __typename?: 'OptionType', id: string, name: string, price?: number | null, default?: boolean | null, sort?: number | null, optionSizes?: Array<{ __typename?: 'OptionSizeType', id: string, name: string, price: number, default?: boolean | null, sort?: number | null } | null> | null } | null> | null };

export type FoodByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FoodByIdQuery = { __typename?: 'Query', foodById: { __typename?: 'FoodType', id: string, name: string, description?: string | null, image?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null, addOns?: Array<{ __typename?: 'AddOnType', id?: string | null, name?: string | null, isRequired?: boolean | null, maxOptionsSelected?: number | null, type?: string | null, options?: Array<{ __typename?: 'OptionType', id: string, name: string, price?: number | null, default?: boolean | null, sort?: number | null, optionSizes?: Array<{ __typename?: 'OptionSizeType', id: string, name: string, price: number, default?: boolean | null, sort?: number | null } | null> | null } | null> | null } | null> | null } | null> | null, addOns?: Array<{ __typename?: 'AddOnType', id?: string | null, name?: string | null, isRequired?: boolean | null, maxOptionsSelected?: number | null, type?: string | null, options?: Array<{ __typename?: 'OptionType', id: string, name: string, price?: number | null, default?: boolean | null, sort?: number | null, optionSizes?: Array<{ __typename?: 'OptionSizeType', id: string, name: string, price: number, default?: boolean | null, sort?: number | null } | null> | null } | null> | null } | null> | null } };

export type FoodsByCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsByCategoryQuery = { __typename?: 'Query', foodsByCategory: Array<{ __typename?: 'FoodsByCategoryType', category: string, sort?: number | null, foods?: Array<{ __typename?: 'FoodWithSizesType', id: string, description?: string | null, image?: string | null, name?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', price?: number | null } | null> | null }> | null } | null> };

export type RestaurantQueryVariables = Exact<{
  input: OrderDetailsInput;
}>;


export type RestaurantQuery = { __typename?: 'Query', restaurant: { __typename?: 'RestaurantOutput', restaurantDetails: { __typename?: 'RestaurantType', id: string, printerMacAddress: string, services: Array<string>, name: string, address: string, radius: number, pickUpOffset: number, deliveryOffset: number, deliveryFee: number, deliveryMinimum: number, timezone: string, openStatusMessage: string, phoneNumbers: Array<{ __typename?: 'PhoneNumberType', id?: string | null, number?: string | null }>, location: { __typename?: 'Location', latitude?: number | null, longitude?: number | null }, menu: Array<{ __typename?: 'FoodsByCategoryType', category: string, sort?: number | null, foods?: Array<{ __typename?: 'FoodWithSizesType', id: string, description?: string | null, image?: string | null, name?: string | null, startDate?: string | null, endDate?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', price?: number | null } | null> | null }> | null }>, pickUpOpeningHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }>, deliveryOpeningHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }> }, orderDetails: { __typename?: 'OrderDetailsType', currentDateTime: string, isOpenNowPickUp: boolean, isOpenNowDelivery: boolean, isOrderTimeValid: boolean, isDeliveryAddressValid: boolean, isPickUp: boolean, deliveryAddress?: string | null, deliveryAddressAdditionalInfo?: string | null, deliveryDetails?: string | null } } };

export type RestaurantDetailsQueryVariables = Exact<{
  restaurantId: Scalars['String']['input'];
}>;


export type RestaurantDetailsQuery = { __typename?: 'Query', restaurantDetails: { __typename?: 'RestaurantDetailsOutput', name: string, logo: string, favicon: string, metaDescription: string, ogImage: string, measurementId: string, domainUrl: string, loader: string, address: string, email: string, navbarType: string, theme: { __typename?: 'ThemeType', accent: string, neutral: string, primary: string, secondary: string, tertiary: string }, gallery?: Array<{ __typename?: 'ImageType', id?: string | null, url?: string | null } | null> | null, openingHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }>, phoneNumbers: Array<{ __typename?: 'PhoneNumberType', id?: string | null, number?: string | null }>, socialMedia?: { __typename?: 'SocialMediaType', id?: string | null, xTwitterUrl?: string | null, facebookUrl?: string | null, instagramUrl?: string | null } | null, hero?: { __typename?: 'HeroType', id?: string | null, type?: string | null, title?: string | null, description?: string | null, background?: string | null, foreground?: string | null } | null, feature?: { __typename?: 'FeatureType', id?: string | null, title?: string | null, type?: string | null, items?: Array<{ __typename?: 'FeatureItemType', id?: string | null, image?: string | null, title?: string | null, description?: string | null } | null> | null } | null, aboutUs?: { __typename?: 'AboutUsType', id?: string | null, type?: string | null, title?: string | null, description?: string | null, imageOne?: string | null, imageTwo?: string | null, imageThree?: string | null, imageFour?: string | null } | null } };

export type ValidateOrderDetailsQueryVariables = Exact<{
  input: OrderDetailsInput;
}>;


export type ValidateOrderDetailsQuery = { __typename?: 'Query', validateOrderDetails: { __typename?: 'ValidateOrderDetailsOutput', restaurantDetails: { __typename?: 'RestaurantType', id: string, printerMacAddress: string, services: Array<string>, name: string, address: string, radius: number, pickUpOffset: number, deliveryOffset: number, deliveryFee: number, deliveryMinimum: number, timezone: string, openStatusMessage: string, phoneNumbers: Array<{ __typename?: 'PhoneNumberType', id?: string | null, number?: string | null }>, location: { __typename?: 'Location', latitude?: number | null, longitude?: number | null }, menu: Array<{ __typename?: 'FoodsByCategoryType', category: string, sort?: number | null, foods?: Array<{ __typename?: 'FoodWithSizesType', id: string, description?: string | null, startDate?: string | null, endDate?: string | null, image?: string | null, name?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', price?: number | null } | null> | null }> | null }>, pickUpOpeningHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }>, deliveryOpeningHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }> }, orderDetails: { __typename?: 'OrderDetailsType', currentDateTime: string, isOpenNowPickUp: boolean, isOpenNowDelivery: boolean, isOrderTimeValid: boolean, isDeliveryAddressValid: boolean, isPickUp: boolean, deliveryAddress?: string | null, deliveryAddressAdditionalInfo?: string | null, deliveryDetails?: string | null } } };

export type ValidateShoppingCartQueryVariables = Exact<{
  order: CreateOrderInput;
}>;


export type ValidateShoppingCartQuery = { __typename?: 'Query', validateShoppingCart: { __typename?: 'ShoppingCart', subTotal: number, tax?: number | null, deliveryFee?: number | null, tip?: number | null, grandTotal?: number | null, orderItems: Array<{ __typename?: 'OrderItemType', id: string, total: number, quantity: number, customInstructions?: string | null, food: { __typename?: 'FoodWithSizesType', id: string, name?: string | null, price?: number | null }, foodSize?: { __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null } | null, options?: Array<{ __typename?: 'OptionWithSizeType', id: string, name: string, price?: number | null, addOnName: string, optionSize?: { __typename?: 'OptionSizeType', id: string, name: string, price: number } | null } | null> | null } | null> } };

export const AddOnFieldsFragmentDoc = gql`
    fragment AddOnFields on AddOnType {
  id
  name
  isRequired
  maxOptionsSelected
  type
  options {
    id
    name
    price
    default
    sort
    optionSizes {
      id
      name
      price
      default
      sort
    }
  }
}
    `;
export const CreateOrderDocument = gql`
    mutation CreateOrder($order: CreateOrderInput!, $paymentMethodId: String!) {
  CreateOrder(order: $order, paymentMethodId: $paymentMethodId) {
    data {
      orderId
      total
      clientSecret
      stripeStatus
    }
    error {
      code
      message
      data
    }
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      order: // value for 'order'
 *      paymentMethodId: // value for 'paymentMethodId'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const FoodByIdDocument = gql`
    query FoodById($id: String!) {
  foodById(id: $id) {
    id
    name
    description
    image
    price
    sizes {
      id
      name
      price
      addOns {
        ...AddOnFields
      }
    }
    addOns {
      ...AddOnFields
    }
  }
}
    ${AddOnFieldsFragmentDoc}`;

/**
 * __useFoodByIdQuery__
 *
 * To run a query within a React component, call `useFoodByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFoodByIdQuery(baseOptions: Apollo.QueryHookOptions<FoodByIdQuery, FoodByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoodByIdQuery, FoodByIdQueryVariables>(FoodByIdDocument, options);
      }
export function useFoodByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodByIdQuery, FoodByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoodByIdQuery, FoodByIdQueryVariables>(FoodByIdDocument, options);
        }
export function useFoodByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FoodByIdQuery, FoodByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FoodByIdQuery, FoodByIdQueryVariables>(FoodByIdDocument, options);
        }
export type FoodByIdQueryHookResult = ReturnType<typeof useFoodByIdQuery>;
export type FoodByIdLazyQueryHookResult = ReturnType<typeof useFoodByIdLazyQuery>;
export type FoodByIdSuspenseQueryHookResult = ReturnType<typeof useFoodByIdSuspenseQuery>;
export type FoodByIdQueryResult = Apollo.QueryResult<FoodByIdQuery, FoodByIdQueryVariables>;
export const FoodsByCategoryDocument = gql`
    query FoodsByCategory {
  foodsByCategory {
    category
    sort
    foods {
      id
      description
      image
      name
      price
      sizes {
        price
      }
    }
  }
}
    `;

/**
 * __useFoodsByCategoryQuery__
 *
 * To run a query within a React component, call `useFoodsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodsByCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useFoodsByCategoryQuery(baseOptions?: Apollo.QueryHookOptions<FoodsByCategoryQuery, FoodsByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoodsByCategoryQuery, FoodsByCategoryQueryVariables>(FoodsByCategoryDocument, options);
      }
export function useFoodsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodsByCategoryQuery, FoodsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoodsByCategoryQuery, FoodsByCategoryQueryVariables>(FoodsByCategoryDocument, options);
        }
export function useFoodsByCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FoodsByCategoryQuery, FoodsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FoodsByCategoryQuery, FoodsByCategoryQueryVariables>(FoodsByCategoryDocument, options);
        }
export type FoodsByCategoryQueryHookResult = ReturnType<typeof useFoodsByCategoryQuery>;
export type FoodsByCategoryLazyQueryHookResult = ReturnType<typeof useFoodsByCategoryLazyQuery>;
export type FoodsByCategorySuspenseQueryHookResult = ReturnType<typeof useFoodsByCategorySuspenseQuery>;
export type FoodsByCategoryQueryResult = Apollo.QueryResult<FoodsByCategoryQuery, FoodsByCategoryQueryVariables>;
export const RestaurantDocument = gql`
    query Restaurant($input: OrderDetailsInput!) {
  restaurant(input: $input) {
    restaurantDetails {
      id
      printerMacAddress
      services
      phoneNumbers {
        id
        number
      }
      name
      address
      location {
        latitude
        longitude
      }
      radius
      pickUpOffset
      deliveryOffset
      deliveryFee
      deliveryMinimum
      menu {
        category
        sort
        foods {
          id
          description
          image
          name
          startDate
          endDate
          price
          sizes {
            price
          }
        }
      }
      pickUpOpeningHours {
        dayOfWeek
        time {
          opens_at
          closes_at
        }
      }
      deliveryOpeningHours {
        dayOfWeek
        time {
          opens_at
          closes_at
        }
      }
      timezone
      openStatusMessage
    }
    orderDetails {
      currentDateTime
      isOpenNowPickUp
      isOpenNowDelivery
      isOrderTimeValid
      isDeliveryAddressValid
      isPickUp
      deliveryAddress
      deliveryAddressAdditionalInfo
      deliveryDetails
    }
  }
}
    `;

/**
 * __useRestaurantQuery__
 *
 * To run a query within a React component, call `useRestaurantQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRestaurantQuery(baseOptions: Apollo.QueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, options);
      }
export function useRestaurantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, options);
        }
export function useRestaurantSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RestaurantQuery, RestaurantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RestaurantQuery, RestaurantQueryVariables>(RestaurantDocument, options);
        }
export type RestaurantQueryHookResult = ReturnType<typeof useRestaurantQuery>;
export type RestaurantLazyQueryHookResult = ReturnType<typeof useRestaurantLazyQuery>;
export type RestaurantSuspenseQueryHookResult = ReturnType<typeof useRestaurantSuspenseQuery>;
export type RestaurantQueryResult = Apollo.QueryResult<RestaurantQuery, RestaurantQueryVariables>;
export const RestaurantDetailsDocument = gql`
    query RestaurantDetails($restaurantId: String!) {
  restaurantDetails(restaurantId: $restaurantId) {
    name
    logo
    favicon
    metaDescription
    ogImage
    measurementId
    domainUrl
    loader
    address
    email
    navbarType
    theme {
      accent
      neutral
      primary
      secondary
      tertiary
    }
    gallery {
      id
      url
    }
    openingHours {
      dayOfWeek
      time {
        opens_at
        closes_at
      }
    }
    phoneNumbers {
      id
      number
    }
    socialMedia {
      id
      xTwitterUrl
      facebookUrl
      instagramUrl
    }
    hero {
      id
      type
      title
      description
      background
      foreground
    }
    feature {
      id
      title
      type
      items {
        id
        image
        title
        description
      }
    }
    aboutUs {
      id
      type
      title
      description
      imageOne
      imageTwo
      imageThree
      imageFour
    }
  }
}
    `;

/**
 * __useRestaurantDetailsQuery__
 *
 * To run a query within a React component, call `useRestaurantDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestaurantDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestaurantDetailsQuery({
 *   variables: {
 *      restaurantId: // value for 'restaurantId'
 *   },
 * });
 */
export function useRestaurantDetailsQuery(baseOptions: Apollo.QueryHookOptions<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>(RestaurantDetailsDocument, options);
      }
export function useRestaurantDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>(RestaurantDetailsDocument, options);
        }
export function useRestaurantDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>(RestaurantDetailsDocument, options);
        }
export type RestaurantDetailsQueryHookResult = ReturnType<typeof useRestaurantDetailsQuery>;
export type RestaurantDetailsLazyQueryHookResult = ReturnType<typeof useRestaurantDetailsLazyQuery>;
export type RestaurantDetailsSuspenseQueryHookResult = ReturnType<typeof useRestaurantDetailsSuspenseQuery>;
export type RestaurantDetailsQueryResult = Apollo.QueryResult<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>;
export const ValidateOrderDetailsDocument = gql`
    query ValidateOrderDetails($input: OrderDetailsInput!) {
  validateOrderDetails(input: $input) {
    restaurantDetails {
      id
      printerMacAddress
      services
      phoneNumbers {
        id
        number
      }
      name
      address
      location {
        latitude
        longitude
      }
      radius
      pickUpOffset
      deliveryOffset
      deliveryFee
      deliveryMinimum
      menu {
        category
        sort
        foods {
          id
          description
          startDate
          endDate
          image
          name
          price
          sizes {
            price
          }
        }
      }
      pickUpOpeningHours {
        dayOfWeek
        time {
          opens_at
          closes_at
        }
      }
      deliveryOpeningHours {
        dayOfWeek
        time {
          opens_at
          closes_at
        }
      }
      timezone
      openStatusMessage
    }
    orderDetails {
      currentDateTime
      isOpenNowPickUp
      isOpenNowDelivery
      isOrderTimeValid
      isDeliveryAddressValid
      isPickUp
      deliveryAddress
      deliveryAddressAdditionalInfo
      deliveryDetails
    }
  }
}
    `;

/**
 * __useValidateOrderDetailsQuery__
 *
 * To run a query within a React component, call `useValidateOrderDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateOrderDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateOrderDetailsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useValidateOrderDetailsQuery(baseOptions: Apollo.QueryHookOptions<ValidateOrderDetailsQuery, ValidateOrderDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateOrderDetailsQuery, ValidateOrderDetailsQueryVariables>(ValidateOrderDetailsDocument, options);
      }
export function useValidateOrderDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateOrderDetailsQuery, ValidateOrderDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateOrderDetailsQuery, ValidateOrderDetailsQueryVariables>(ValidateOrderDetailsDocument, options);
        }
export function useValidateOrderDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ValidateOrderDetailsQuery, ValidateOrderDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidateOrderDetailsQuery, ValidateOrderDetailsQueryVariables>(ValidateOrderDetailsDocument, options);
        }
export type ValidateOrderDetailsQueryHookResult = ReturnType<typeof useValidateOrderDetailsQuery>;
export type ValidateOrderDetailsLazyQueryHookResult = ReturnType<typeof useValidateOrderDetailsLazyQuery>;
export type ValidateOrderDetailsSuspenseQueryHookResult = ReturnType<typeof useValidateOrderDetailsSuspenseQuery>;
export type ValidateOrderDetailsQueryResult = Apollo.QueryResult<ValidateOrderDetailsQuery, ValidateOrderDetailsQueryVariables>;
export const ValidateShoppingCartDocument = gql`
    query ValidateShoppingCart($order: CreateOrderInput!) {
  validateShoppingCart(order: $order) {
    subTotal
    tax
    deliveryFee
    tip
    grandTotal
    orderItems {
      id
      food {
        id
        name
        price
      }
      foodSize {
        id
        name
        price
      }
      options {
        id
        name
        price
        addOnName
        optionSize {
          id
          name
          price
        }
      }
      total
      quantity
      customInstructions
    }
  }
}
    `;

/**
 * __useValidateShoppingCartQuery__
 *
 * To run a query within a React component, call `useValidateShoppingCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateShoppingCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateShoppingCartQuery({
 *   variables: {
 *      order: // value for 'order'
 *   },
 * });
 */
export function useValidateShoppingCartQuery(baseOptions: Apollo.QueryHookOptions<ValidateShoppingCartQuery, ValidateShoppingCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateShoppingCartQuery, ValidateShoppingCartQueryVariables>(ValidateShoppingCartDocument, options);
      }
export function useValidateShoppingCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateShoppingCartQuery, ValidateShoppingCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateShoppingCartQuery, ValidateShoppingCartQueryVariables>(ValidateShoppingCartDocument, options);
        }
export function useValidateShoppingCartSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ValidateShoppingCartQuery, ValidateShoppingCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidateShoppingCartQuery, ValidateShoppingCartQueryVariables>(ValidateShoppingCartDocument, options);
        }
export type ValidateShoppingCartQueryHookResult = ReturnType<typeof useValidateShoppingCartQuery>;
export type ValidateShoppingCartLazyQueryHookResult = ReturnType<typeof useValidateShoppingCartLazyQuery>;
export type ValidateShoppingCartSuspenseQueryHookResult = ReturnType<typeof useValidateShoppingCartSuspenseQuery>;
export type ValidateShoppingCartQueryResult = Apollo.QueryResult<ValidateShoppingCartQuery, ValidateShoppingCartQueryVariables>;