import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** JSON custom scalar type */
  JSON: any;
};

export type AddOnSimple = {
  __typename?: 'AddOnSimple';
  id?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type AddOnType = {
  __typename?: 'AddOnType';
  foods?: Maybe<Array<Maybe<FoodType>>>;
  id?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  maxOptionsSelected?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<OptionType>>>;
};

export type AddressType = {
  __typename?: 'AddressType';
  city: Scalars['String'];
  country: Scalars['String'];
  formattedAddress: Scalars['String'];
  id: Scalars['String'];
  location: Location;
  order: OrderType;
  state: Scalars['String'];
  street: Scalars['String'];
  suiteAptFloor: Scalars['String'];
  zip: Scalars['String'];
};

export type BaseFood = {
  __typename?: 'BaseFood';
  id: Scalars['String'];
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
};

export type CreateAddOnInput = {
  id?: InputMaybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  name: Scalars['String'];
  options: Array<CreateOptionInput>;
};

export type CreateFoodInput = {
  addOns?: InputMaybe<Array<CreateAddOnInput>>;
  category: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
  restaurantId: Scalars['String'];
  sizes?: InputMaybe<Array<CreateFoodSizeInput>>;
};

export type CreateFoodSizeInput = {
  addOns: Array<CreateAddOnInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateOptionInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  optionSizes?: InputMaybe<Array<OptionSizeInput>>;
  price: Scalars['Float'];
};

export type CreateOrderInput = {
  deliveryAddress?: InputMaybe<Scalars['String']>;
  deliveryDetails?: InputMaybe<Scalars['String']>;
  guestEmail?: InputMaybe<Scalars['String']>;
  guestFirstName?: InputMaybe<Scalars['String']>;
  guestLastName?: InputMaybe<Scalars['String']>;
  guestPhone?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isPickUp: Scalars['Boolean'];
  isTipPercentage: Scalars['Boolean'];
  orderItems: Array<OrderItemInput>;
  orderTime: Scalars['String'];
  restaurantId: Scalars['String'];
  suiteAptFloor?: InputMaybe<Scalars['String']>;
  tip: Scalars['Float'];
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  clientSecret: Scalars['String'];
  orderId: Scalars['String'];
  stripeStatus: Scalars['String'];
  total: Scalars['Float'];
};

export type CreateOrderResponse = {
  __typename?: 'CreateOrderResponse';
  data?: Maybe<CreateOrderOutput>;
  error?: Maybe<ErrorType>;
};

export type DayInput = {
  dayOfWeek: Scalars['String'];
  time: Array<TimeInput>;
};

export type DayOutput = {
  __typename?: 'DayOutput';
  dayOfWeek: Scalars['String'];
  time: Array<TimeOutput>;
};

export enum ErrorCodes {
  InvalidDeliveryAddress = 'INVALID_DELIVERY_ADDRESS',
  InvalidOrderTime = 'INVALID_ORDER_TIME',
  StripePaymentError = 'STRIPE_PAYMENT_ERROR'
}

export type ErrorType = {
  __typename?: 'ErrorType';
  /** A unique error code. */
  code?: Maybe<Scalars['String']>;
  /** Additional data related to the error. */
  data?: Maybe<Scalars['JSON']>;
  /** A human-readable error message. */
  message?: Maybe<Scalars['String']>;
};

export type FoodSize = {
  __typename?: 'FoodSize';
  addOns?: Maybe<Array<Maybe<AddOnType>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type FoodType = {
  __typename?: 'FoodType';
  addOns?: Maybe<Array<Maybe<AddOnType>>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Array<Maybe<FoodSize>>>;
};

export type FoodWithSizesType = {
  __typename?: 'FoodWithSizesType';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Array<Maybe<FoodSize>>>;
};

export type FoodsByCategoryType = {
  __typename?: 'FoodsByCategoryType';
  category: Scalars['String'];
  foods?: Maybe<Array<FoodWithSizesType>>;
  order: Scalars['Int'];
};

export type Location = {
  __typename?: 'Location';
  id?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type LocationInput = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateOrder: CreateOrderResponse;
};


export type MutationCreateOrderArgs = {
  order: CreateOrderInput;
  paymentMethodId: Scalars['String'];
};

export type OpeningHour = {
  __typename?: 'OpeningHour';
  closeTime: Scalars['String'];
  dayOfWeek: Scalars['String'];
  id: Scalars['Int'];
  openTime: Scalars['String'];
  restaurantId: Scalars['Int'];
};

export type OptionSizeInput = {
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type OptionSizeType = {
  __typename?: 'OptionSizeType';
  default?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  name: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  price: Scalars['Float'];
};

export type OptionSizeWithOption = {
  __typename?: 'OptionSizeWithOption';
  default?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  name: Scalars['String'];
  option: OptionType;
  order?: Maybe<Scalars['Int']>;
  price: Scalars['Float'];
};

export type OptionType = {
  __typename?: 'OptionType';
  default?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  name: Scalars['String'];
  optionSizes?: Maybe<Array<Maybe<OptionSizeType>>>;
  order?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
};

export type OptionWithSizeInput = {
  addOnName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  optionSizeId?: InputMaybe<Scalars['String']>;
};

export type OptionWithSizeType = {
  __typename?: 'OptionWithSizeType';
  addOnName: Scalars['String'];
  default?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  name: Scalars['String'];
  optionSize?: Maybe<OptionSizeType>;
  order?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
};

export type OrderDetailsInput = {
  deliveryAddress?: InputMaybe<Scalars['String']>;
  deliveryAddressAdditionalInfo?: InputMaybe<Scalars['String']>;
  deliveryDetails?: InputMaybe<Scalars['String']>;
  isPickUp: Scalars['Boolean'];
  orderTime: Scalars['String'];
  restaurantId: Scalars['String'];
};

export type OrderDetailsType = {
  __typename?: 'OrderDetailsType';
  currentDateTime: Scalars['String'];
  deliveryAddress?: Maybe<Scalars['String']>;
  deliveryAddressAdditionalInfo?: Maybe<Scalars['String']>;
  deliveryDetails?: Maybe<Scalars['String']>;
  isDeliveryAddressValid: Scalars['Boolean'];
  isOpenNowDelivery: Scalars['Boolean'];
  isOpenNowPickUp: Scalars['Boolean'];
  isOrderTimeValid: Scalars['Boolean'];
  isPickUp: Scalars['Boolean'];
};

export type OrderItemInput = {
  foodId: Scalars['String'];
  foodSizeId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<InputMaybe<OptionWithSizeInput>>>;
  quantity: Scalars['Int'];
};

export type OrderItemOutput = {
  __typename?: 'OrderItemOutput';
  food: FoodWithSizesType;
  foodSize?: Maybe<FoodSize>;
  id: Scalars['String'];
  options?: Maybe<Array<Maybe<OptionWithSizeType>>>;
  quantity: Scalars['Int'];
  total: Scalars['Float'];
};

export type OrderItemType = {
  __typename?: 'OrderItemType';
  food: FoodWithSizesType;
  foodSize?: Maybe<FoodSize>;
  id: Scalars['String'];
  options?: Maybe<Array<Maybe<OptionWithSizeType>>>;
  quantity: Scalars['Int'];
  total: Scalars['Float'];
};

export enum OrderStatusEnum {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type OrderType = {
  __typename?: 'OrderType';
  address?: Maybe<AddressType>;
  deliveryFee?: Maybe<Scalars['Float']>;
  estimatedCompletionTime: Scalars['String'];
  guestEmail?: Maybe<Scalars['String']>;
  guestFirstName?: Maybe<Scalars['String']>;
  guestLastName?: Maybe<Scalars['String']>;
  guestPhone?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isASAP: Scalars['Boolean'];
  orderItems?: Maybe<Array<OrderItemType>>;
  orderNumber: Scalars['String'];
  orderStatus: OrderStatusEnum;
  orderType: OrderTypeEnum;
  placementTime: Scalars['String'];
  subTotal: Scalars['Float'];
  tax: Scalars['Float'];
  tip: Scalars['Float'];
  total: Scalars['Float'];
  user?: Maybe<UserType>;
};

export enum OrderTypeEnum {
  Delivery = 'DELIVERY',
  Pickup = 'PICKUP'
}

export type Query = {
  __typename?: 'Query';
  addOns: Array<Maybe<AddOnType>>;
  foodById: FoodType;
  foods: Array<Maybe<FoodType>>;
  foodsByCategory: Array<Maybe<FoodsByCategoryType>>;
  orders: Array<OrderType>;
  restaurant: RestaurantOutput;
  restaurantDetails: RestaurantDetailsOutput;
  todaysOrders: Array<OrderType>;
  validateOrderDetails: ValidateOrderDetailsOutput;
  validateShoppingCart: ShoppingCart;
};


export type QueryFoodByIdArgs = {
  id: Scalars['String'];
};


export type QueryRestaurantArgs = {
  input: OrderDetailsInput;
};


export type QueryRestaurantDetailsArgs = {
  restaurantId: Scalars['String'];
};


export type QueryTodaysOrdersArgs = {
  restaurantId: Scalars['String'];
};


export type QueryValidateOrderDetailsArgs = {
  input: OrderDetailsInput;
};


export type QueryValidateShoppingCartArgs = {
  order: CreateOrderInput;
};

export type RestaurantDetailsOutput = {
  __typename?: 'RestaurantDetailsOutput';
  logo: Scalars['String'];
  name: Scalars['String'];
};

export type RestaurantOutput = {
  __typename?: 'RestaurantOutput';
  orderDetails: OrderDetailsType;
  restaurantDetails: RestaurantType;
};

export type RestaurantType = {
  __typename?: 'RestaurantType';
  address: Scalars['String'];
  deliveryFee: Scalars['Float'];
  deliveryOffset: Scalars['Int'];
  deliveryOpeningHours: Array<DayOutput>;
  id: Scalars['String'];
  location: Location;
  menu: Array<FoodsByCategoryType>;
  name: Scalars['String'];
  openStatusMessage: Scalars['String'];
  phone: Scalars['String'];
  pickUpOffset: Scalars['Int'];
  pickUpOpeningHours: Array<DayOutput>;
  radius: Scalars['Float'];
  timezone: Scalars['String'];
};

export type ShoppingCart = {
  __typename?: 'ShoppingCart';
  deliveryFee?: Maybe<Scalars['Float']>;
  grandTotal?: Maybe<Scalars['Float']>;
  orderItems: Array<Maybe<OrderItemType>>;
  subTotal: Scalars['Float'];
  tax?: Maybe<Scalars['Float']>;
  tip?: Maybe<Scalars['Float']>;
};

export type ShoppingCartItem = {
  __typename?: 'ShoppingCartItem';
  food?: Maybe<FoodWithSizesType>;
  orderItemId: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  selectedOptions?: Maybe<Array<Maybe<OptionWithSizeType>>>;
  selectedSize?: Maybe<FoodSize>;
};

export type SimpleFoodSize = {
  __typename?: 'SimpleFoodSize';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderCreated: OrderType;
};


export type SubscriptionOrderCreatedArgs = {
  restaurantId: Scalars['String'];
};

export type TimeInput = {
  closes_at?: InputMaybe<Scalars['String']>;
  opens_at?: InputMaybe<Scalars['String']>;
};

export type TimeOutput = {
  __typename?: 'TimeOutput';
  closes_at?: Maybe<Scalars['String']>;
  opens_at?: Maybe<Scalars['String']>;
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['String'];
};

export type ValidateOrderDetailsOutput = {
  __typename?: 'ValidateOrderDetailsOutput';
  orderDetails: OrderDetailsType;
  restaurantDetails: RestaurantType;
};

export type CreateOrderMutationVariables = Exact<{
  order: CreateOrderInput;
  paymentMethodId: Scalars['String'];
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', CreateOrder: { __typename?: 'CreateOrderResponse', data?: { __typename?: 'CreateOrderOutput', orderId: string, total: number, clientSecret: string, stripeStatus: string } | null, error?: { __typename?: 'ErrorType', code?: string | null, message?: string | null, data?: any | null } | null } };

export type AddOnFieldsFragment = { __typename?: 'AddOnType', id?: string | null, name?: string | null, isRequired?: boolean | null, maxOptionsSelected?: number | null, options?: Array<{ __typename?: 'OptionType', id: string, name: string, price?: number | null, default?: boolean | null, order?: number | null, optionSizes?: Array<{ __typename?: 'OptionSizeType', id: string, name: string, price: number, default?: boolean | null, order?: number | null } | null> | null } | null> | null };

export type FoodByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FoodByIdQuery = { __typename?: 'Query', foodById: { __typename?: 'FoodType', id: string, name: string, description?: string | null, image?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null, addOns?: Array<{ __typename?: 'AddOnType', id?: string | null, name?: string | null, isRequired?: boolean | null, maxOptionsSelected?: number | null, options?: Array<{ __typename?: 'OptionType', id: string, name: string, price?: number | null, default?: boolean | null, order?: number | null, optionSizes?: Array<{ __typename?: 'OptionSizeType', id: string, name: string, price: number, default?: boolean | null, order?: number | null } | null> | null } | null> | null } | null> | null } | null> | null, addOns?: Array<{ __typename?: 'AddOnType', id?: string | null, name?: string | null, isRequired?: boolean | null, maxOptionsSelected?: number | null, options?: Array<{ __typename?: 'OptionType', id: string, name: string, price?: number | null, default?: boolean | null, order?: number | null, optionSizes?: Array<{ __typename?: 'OptionSizeType', id: string, name: string, price: number, default?: boolean | null, order?: number | null } | null> | null } | null> | null } | null> | null } };

export type FoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsQuery = { __typename?: 'Query', foods: Array<{ __typename?: 'FoodType', id: string, name: string, description?: string | null, image?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null, addOns?: Array<{ __typename?: 'AddOnType', id?: string | null, name?: string | null, isRequired?: boolean | null, maxOptionsSelected?: number | null, options?: Array<{ __typename?: 'OptionType', id: string, name: string, price?: number | null, default?: boolean | null, order?: number | null, optionSizes?: Array<{ __typename?: 'OptionSizeType', id: string, name: string, price: number, default?: boolean | null, order?: number | null } | null> | null } | null> | null } | null> | null } | null> | null, addOns?: Array<{ __typename?: 'AddOnType', id?: string | null, name?: string | null, isRequired?: boolean | null, maxOptionsSelected?: number | null, options?: Array<{ __typename?: 'OptionType', id: string, name: string, price?: number | null, default?: boolean | null, order?: number | null, optionSizes?: Array<{ __typename?: 'OptionSizeType', id: string, name: string, price: number, default?: boolean | null, order?: number | null } | null> | null } | null> | null } | null> | null } | null> };

export type FoodsByCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsByCategoryQuery = { __typename?: 'Query', foodsByCategory: Array<{ __typename?: 'FoodsByCategoryType', category: string, order: number, foods?: Array<{ __typename?: 'FoodWithSizesType', id: string, description?: string | null, image?: string | null, name?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', price?: number | null } | null> | null }> | null } | null> };

export type RestaurantQueryVariables = Exact<{
  input: OrderDetailsInput;
}>;


export type RestaurantQuery = { __typename?: 'Query', restaurant: { __typename?: 'RestaurantOutput', restaurantDetails: { __typename?: 'RestaurantType', id: string, phone: string, name: string, address: string, radius: number, pickUpOffset: number, deliveryOffset: number, deliveryFee: number, timezone: string, openStatusMessage: string, location: { __typename?: 'Location', latitude?: number | null, longitude?: number | null }, menu: Array<{ __typename?: 'FoodsByCategoryType', category: string, order: number, foods?: Array<{ __typename?: 'FoodWithSizesType', id: string, description?: string | null, image?: string | null, name?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', price?: number | null } | null> | null }> | null }>, pickUpOpeningHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }>, deliveryOpeningHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }> }, orderDetails: { __typename?: 'OrderDetailsType', currentDateTime: string, isOpenNowPickUp: boolean, isOpenNowDelivery: boolean, isOrderTimeValid: boolean, isDeliveryAddressValid: boolean, isPickUp: boolean, deliveryAddress?: string | null, deliveryAddressAdditionalInfo?: string | null, deliveryDetails?: string | null } } };

export type RestaurantDetailsQueryVariables = Exact<{
  restaurantId: Scalars['String'];
}>;


export type RestaurantDetailsQuery = { __typename?: 'Query', restaurantDetails: { __typename?: 'RestaurantDetailsOutput', name: string } };

export type ValidateOrderDetailsQueryVariables = Exact<{
  input: OrderDetailsInput;
}>;


export type ValidateOrderDetailsQuery = { __typename?: 'Query', validateOrderDetails: { __typename?: 'ValidateOrderDetailsOutput', restaurantDetails: { __typename?: 'RestaurantType', id: string, phone: string, name: string, address: string, radius: number, pickUpOffset: number, deliveryOffset: number, deliveryFee: number, timezone: string, openStatusMessage: string, location: { __typename?: 'Location', latitude?: number | null, longitude?: number | null }, menu: Array<{ __typename?: 'FoodsByCategoryType', category: string, order: number, foods?: Array<{ __typename?: 'FoodWithSizesType', id: string, description?: string | null, image?: string | null, name?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', price?: number | null } | null> | null }> | null }>, pickUpOpeningHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }>, deliveryOpeningHours: Array<{ __typename?: 'DayOutput', dayOfWeek: string, time: Array<{ __typename?: 'TimeOutput', opens_at?: string | null, closes_at?: string | null }> }> }, orderDetails: { __typename?: 'OrderDetailsType', currentDateTime: string, isOpenNowPickUp: boolean, isOpenNowDelivery: boolean, isOrderTimeValid: boolean, isDeliveryAddressValid: boolean, isPickUp: boolean, deliveryAddress?: string | null, deliveryAddressAdditionalInfo?: string | null, deliveryDetails?: string | null } } };

export type ValidateShoppingCartQueryVariables = Exact<{
  order: CreateOrderInput;
}>;


export type ValidateShoppingCartQuery = { __typename?: 'Query', validateShoppingCart: { __typename?: 'ShoppingCart', subTotal: number, tax?: number | null, deliveryFee?: number | null, tip?: number | null, grandTotal?: number | null, orderItems: Array<{ __typename?: 'OrderItemType', id: string, total: number, quantity: number, food: { __typename?: 'FoodWithSizesType', id: string, name?: string | null, price?: number | null }, foodSize?: { __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null } | null, options?: Array<{ __typename?: 'OptionWithSizeType', id: string, name: string, price?: number | null, addOnName: string, optionSize?: { __typename?: 'OptionSizeType', id: string, name: string, price: number } | null } | null> | null } | null> } };

export const AddOnFieldsFragmentDoc = gql`
    fragment AddOnFields on AddOnType {
  id
  name
  isRequired
  maxOptionsSelected
  options {
    id
    name
    price
    default
    order
    optionSizes {
      id
      name
      price
      default
      order
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
export type FoodByIdQueryHookResult = ReturnType<typeof useFoodByIdQuery>;
export type FoodByIdLazyQueryHookResult = ReturnType<typeof useFoodByIdLazyQuery>;
export type FoodByIdQueryResult = Apollo.QueryResult<FoodByIdQuery, FoodByIdQueryVariables>;
export const FoodsDocument = gql`
    query Foods {
  foods {
    id
    name
    description
    image
    sizes {
      id
      name
      price
      addOns {
        ...AddOnFields
      }
    }
    price
    addOns {
      ...AddOnFields
    }
  }
}
    ${AddOnFieldsFragmentDoc}`;

/**
 * __useFoodsQuery__
 *
 * To run a query within a React component, call `useFoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFoodsQuery(baseOptions?: Apollo.QueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, options);
      }
export function useFoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, options);
        }
export type FoodsQueryHookResult = ReturnType<typeof useFoodsQuery>;
export type FoodsLazyQueryHookResult = ReturnType<typeof useFoodsLazyQuery>;
export type FoodsQueryResult = Apollo.QueryResult<FoodsQuery, FoodsQueryVariables>;
export const FoodsByCategoryDocument = gql`
    query FoodsByCategory {
  foodsByCategory {
    category
    order
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
export type FoodsByCategoryQueryHookResult = ReturnType<typeof useFoodsByCategoryQuery>;
export type FoodsByCategoryLazyQueryHookResult = ReturnType<typeof useFoodsByCategoryLazyQuery>;
export type FoodsByCategoryQueryResult = Apollo.QueryResult<FoodsByCategoryQuery, FoodsByCategoryQueryVariables>;
export const RestaurantDocument = gql`
    query Restaurant($input: OrderDetailsInput!) {
  restaurant(input: $input) {
    restaurantDetails {
      id
      phone
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
      menu {
        category
        order
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
export type RestaurantQueryHookResult = ReturnType<typeof useRestaurantQuery>;
export type RestaurantLazyQueryHookResult = ReturnType<typeof useRestaurantLazyQuery>;
export type RestaurantQueryResult = Apollo.QueryResult<RestaurantQuery, RestaurantQueryVariables>;
export const RestaurantDetailsDocument = gql`
    query RestaurantDetails($restaurantId: String!) {
  restaurantDetails(restaurantId: $restaurantId) {
    name
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
export type RestaurantDetailsQueryHookResult = ReturnType<typeof useRestaurantDetailsQuery>;
export type RestaurantDetailsLazyQueryHookResult = ReturnType<typeof useRestaurantDetailsLazyQuery>;
export type RestaurantDetailsQueryResult = Apollo.QueryResult<RestaurantDetailsQuery, RestaurantDetailsQueryVariables>;
export const ValidateOrderDetailsDocument = gql`
    query ValidateOrderDetails($input: OrderDetailsInput!) {
  validateOrderDetails(input: $input) {
    restaurantDetails {
      id
      phone
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
      menu {
        category
        order
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
export type ValidateOrderDetailsQueryHookResult = ReturnType<typeof useValidateOrderDetailsQuery>;
export type ValidateOrderDetailsLazyQueryHookResult = ReturnType<typeof useValidateOrderDetailsLazyQuery>;
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
export type ValidateShoppingCartQueryHookResult = ReturnType<typeof useValidateShoppingCartQuery>;
export type ValidateShoppingCartLazyQueryHookResult = ReturnType<typeof useValidateShoppingCartLazyQuery>;
export type ValidateShoppingCartQueryResult = Apollo.QueryResult<ValidateShoppingCartQuery, ValidateShoppingCartQueryVariables>;