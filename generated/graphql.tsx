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

export type CreateAddOnInput = {
  id?: InputMaybe<Scalars['String']>;
  isRequired: Scalars['Boolean'];
  items: Array<CreateItemInput>;
  name: Scalars['String'];
};

export type CreateFoodInput = {
  addOns: Array<CreateAddOnInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateItemInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateOrderInput = {
  foodId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  itemIds: Array<InputMaybe<Scalars['String']>>;
  total?: InputMaybe<Scalars['Float']>;
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
};

export type Item = {
  __typename?: 'Item';
  addOns?: Maybe<Array<Maybe<AddOn>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFood: Food;
  createOrder: Order;
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
  foods: Array<Maybe<Food>>;
  items: Array<Maybe<Item>>;
};

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id?: string | null, total?: number | null, orderItems?: Array<{ __typename: 'OrderItem', id?: string | null } | null> | null } };

export type FoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsQuery = { __typename?: 'Query', foods: Array<{ __typename?: 'Food', id?: string | null, name?: string | null, price?: number | null, description?: string | null, addOns?: Array<{ __typename?: 'AddOn', id?: string | null, name?: string | null, isRequired?: boolean | null, items?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, price?: number | null } | null> | null } | null> | null } | null> };


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
export const FoodsDocument = gql`
    query Foods {
  foods {
    id
    name
    price
    description
    addOns {
      id
      name
      isRequired
      items {
        id
        name
        price
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