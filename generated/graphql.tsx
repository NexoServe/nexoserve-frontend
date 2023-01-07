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
};

export type AddOn = {
  __typename?: 'AddOn';
  foods?: Maybe<Array<Maybe<Food>>>;
  id?: Maybe<Scalars['String']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<Item>>>;
  name?: Maybe<Scalars['String']>;
};

export type Checkout = {
  __typename?: 'Checkout';
  clientSecret?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
};

export type CheckoutCalculateInput = {
  id?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Array<CreateOrderInput>>;
};

export type CreateAddOnInput = {
  id?: InputMaybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  items: Array<CreateItemInput>;
  name: Scalars['String'];
};

export type CreateFoodInput = {
  addOns?: InputMaybe<Array<CreateAddOnInput>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Array<CreateFoodSizeInput>>;
};

export type CreateFoodSizeInput = {
  addOns: Array<CreateAddOnInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateItemInput = {
  id?: InputMaybe<Scalars['String']>;
  itemSizes?: InputMaybe<Array<ItemSizeInput>>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateOrderInput = {
  foodId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  itemIds: Array<InputMaybe<Scalars['String']>>;
  quantity: Scalars['Int'];
};

export type CreateOrderItemInput = {
  foodId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  items: Array<Scalars['String']>;
};

export type Food = {
  __typename?: 'Food';
  addOns?: Maybe<Array<Maybe<AddOn>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Array<Maybe<FoodSize>>>;
};

export type FoodSize = {
  __typename?: 'FoodSize';
  addOns?: Maybe<Array<Maybe<AddOn>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Item = {
  __typename?: 'Item';
  addOns?: Maybe<Array<Maybe<AddOn>>>;
  id?: Maybe<Scalars['String']>;
  itemSizes?: Maybe<Array<Maybe<ItemSize>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type ItemSize = {
  __typename?: 'ItemSize';
  default?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  portions?: Maybe<Array<Maybe<ItemSizePortion>>>;
  price?: Maybe<Scalars['Float']>;
};

export type ItemSizeInput = {
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  portions?: InputMaybe<Array<ItemSizePortionInput>>;
  price: Scalars['Float'];
};

export type ItemSizePortion = {
  __typename?: 'ItemSizePortion';
  default?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type ItemSizePortionInput = {
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CheckoutCalculateMut: Checkout;
  createFood: Food;
  createOrder: Order;
};


export type MutationCheckoutCalculateMutArgs = {
  input: CheckoutCalculateInput;
};


export type MutationCreateFoodArgs = {
  input: CreateFoodInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['String']>;
  orderItems?: Maybe<Array<Maybe<OrderItem>>>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  food?: Maybe<Food>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Item>>>;
};

export type Query = {
  __typename?: 'Query';
  addOns: Array<Maybe<AddOn>>;
  checkoutCalculate: Checkout;
  foods: Array<Maybe<Food>>;
  items: Array<Maybe<Item>>;
};


export type QueryCheckoutCalculateArgs = {
  input: CheckoutCalculateInput;
};

export type CheckoutCalculateMutMutationVariables = Exact<{
  checkoutCalculateMutInput2: CheckoutCalculateInput;
}>;


export type CheckoutCalculateMutMutation = { __typename?: 'Mutation', CheckoutCalculateMut: { __typename?: 'Checkout', id?: string | null, total?: number | null, clientSecret?: string | null } };

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id?: string | null, total?: number | null, orderItems?: Array<{ __typename: 'OrderItem', id?: string | null } | null> | null } };

export type CheckoutCalculateQueryVariables = Exact<{
  input: CheckoutCalculateInput;
}>;


export type CheckoutCalculateQuery = { __typename?: 'Query', checkoutCalculate: { __typename?: 'Checkout', id?: string | null, total?: number | null } };

export type FoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsQuery = { __typename?: 'Query', foods: Array<{ __typename?: 'Food', id?: string | null, name?: string | null, description?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null, addOns?: Array<{ __typename?: 'AddOn', id?: string | null, name?: string | null, isRequired?: boolean | null, items?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, price?: number | null, itemSizes?: Array<{ __typename?: 'ItemSize', id?: string | null, name?: string | null, default?: boolean | null, price?: number | null, portions?: Array<{ __typename?: 'ItemSizePortion', id?: string | null, name?: string | null, default?: boolean | null, price?: number | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null, addOns?: Array<{ __typename?: 'AddOn', id?: string | null, name?: string | null, isRequired?: boolean | null, items?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, price?: number | null, itemSizes?: Array<{ __typename?: 'ItemSize', id?: string | null, name?: string | null, default?: boolean | null, price?: number | null, portions?: Array<{ __typename?: 'ItemSizePortion', id?: string | null, name?: string | null, default?: boolean | null, price?: number | null } | null> | null } | null> | null } | null> | null } | null> | null } | null> };


export const CheckoutCalculateMutDocument = gql`
    mutation CheckoutCalculateMut($checkoutCalculateMutInput2: CheckoutCalculateInput!) {
  CheckoutCalculateMut(input: $checkoutCalculateMutInput2) {
    id
    total
    clientSecret
  }
}
    `;
export type CheckoutCalculateMutMutationFn = Apollo.MutationFunction<CheckoutCalculateMutMutation, CheckoutCalculateMutMutationVariables>;

/**
 * __useCheckoutCalculateMutMutation__
 *
 * To run a mutation, you first call `useCheckoutCalculateMutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutCalculateMutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkoutCalculateMutMutation, { data, loading, error }] = useCheckoutCalculateMutMutation({
 *   variables: {
 *      checkoutCalculateMutInput2: // value for 'checkoutCalculateMutInput2'
 *   },
 * });
 */
export function useCheckoutCalculateMutMutation(baseOptions?: Apollo.MutationHookOptions<CheckoutCalculateMutMutation, CheckoutCalculateMutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckoutCalculateMutMutation, CheckoutCalculateMutMutationVariables>(CheckoutCalculateMutDocument, options);
      }
export type CheckoutCalculateMutMutationHookResult = ReturnType<typeof useCheckoutCalculateMutMutation>;
export type CheckoutCalculateMutMutationResult = Apollo.MutationResult<CheckoutCalculateMutMutation>;
export type CheckoutCalculateMutMutationOptions = Apollo.BaseMutationOptions<CheckoutCalculateMutMutation, CheckoutCalculateMutMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($createOrderInput: CreateOrderInput!) {
  createOrder(input: $createOrderInput) {
    id
    total
    orderItems {
      id
      __typename
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
 *      createOrderInput: // value for 'createOrderInput'
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
export const CheckoutCalculateDocument = gql`
    query CheckoutCalculate($input: CheckoutCalculateInput!) {
  checkoutCalculate(input: $input) {
    id
    total
  }
}
    `;

/**
 * __useCheckoutCalculateQuery__
 *
 * To run a query within a React component, call `useCheckoutCalculateQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckoutCalculateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckoutCalculateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckoutCalculateQuery(baseOptions: Apollo.QueryHookOptions<CheckoutCalculateQuery, CheckoutCalculateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckoutCalculateQuery, CheckoutCalculateQueryVariables>(CheckoutCalculateDocument, options);
      }
export function useCheckoutCalculateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckoutCalculateQuery, CheckoutCalculateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckoutCalculateQuery, CheckoutCalculateQueryVariables>(CheckoutCalculateDocument, options);
        }
export type CheckoutCalculateQueryHookResult = ReturnType<typeof useCheckoutCalculateQuery>;
export type CheckoutCalculateLazyQueryHookResult = ReturnType<typeof useCheckoutCalculateLazyQuery>;
export type CheckoutCalculateQueryResult = Apollo.QueryResult<CheckoutCalculateQuery, CheckoutCalculateQueryVariables>;
export const FoodsDocument = gql`
    query Foods {
  foods {
    id
    name
    description
    sizes {
      id
      name
      price
      addOns {
        id
        name
        isRequired
        items {
          id
          name
          price
          itemSizes {
            id
            name
            default
            price
            portions {
              id
              name
              default
              price
            }
          }
        }
      }
    }
    price
    addOns {
      id
      name
      isRequired
      items {
        id
        name
        price
        itemSizes {
          id
          name
          default
          price
          portions {
            id
            name
            default
            price
          }
        }
      }
    }
  }
}
    `;

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