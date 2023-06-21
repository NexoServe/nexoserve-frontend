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

export type BaseFood = {
  __typename?: 'BaseFood';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type Checkout = {
  __typename?: 'Checkout';
  clientSecret?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
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
  category: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
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
  image?: Maybe<Scalars['String']>;
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

export type FoodsByCategory = {
  __typename?: 'FoodsByCategory';
  category: Scalars['String'];
  foods?: Maybe<Array<SimpleFood>>;
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
  price?: Maybe<Scalars['Float']>;
};

export type ItemSizeInput = {
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
  input: Array<InputMaybe<ShoppingCartInput>>;
  paymentMethodId: Scalars['String'];
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
  foodById?: Maybe<Food>;
  foods: Array<Maybe<Food>>;
  foodsByCategory: Array<Maybe<FoodsByCategory>>;
  validateShoppingCart: ShoppingCart;
};


export type QueryFoodByIdArgs = {
  id: Scalars['String'];
};


export type QueryValidateShoppingCartArgs = {
  input: Array<InputMaybe<ShoppingCartInput>>;
};

export type SelectedItem = {
  __typename?: 'SelectedItem';
  addOnName: Scalars['String'];
  id: Scalars['String'];
  itemSize?: Maybe<ItemSize>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type ShoppingCart = {
  __typename?: 'ShoppingCart';
  grandTotal?: Maybe<Scalars['Float']>;
  shoppingCartItems: Array<Maybe<ShoppingCartItem>>;
  subTotal: Scalars['Float'];
  tax?: Maybe<Scalars['Float']>;
  tip?: Maybe<Scalars['Float']>;
};

export type ShoppingCartInput = {
  foodId: Scalars['String'];
  foodSizeId?: InputMaybe<Scalars['String']>;
  isTipPercentage?: InputMaybe<Scalars['Boolean']>;
  items: Array<InputMaybe<ShoppingCartItemInput>>;
  orderItemId: Scalars['String'];
  quantity: Scalars['Int'];
  tip?: InputMaybe<Scalars['Float']>;
};

export type ShoppingCartItem = {
  __typename?: 'ShoppingCartItem';
  food?: Maybe<SimpleFood>;
  orderItemId: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  selectedItems?: Maybe<Array<Maybe<SelectedItem>>>;
  selectedSize?: Maybe<FoodSize>;
};

export type ShoppingCartItemInput = {
  addOnName: Scalars['String'];
  itemId: Scalars['String'];
  itemSizeId?: InputMaybe<Scalars['String']>;
};

export type SimpleFood = {
  __typename?: 'SimpleFood';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Array<Maybe<FoodSize>>>;
};

export type SimpleFoodSize = {
  __typename?: 'SimpleFoodSize';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
};

export type CheckoutCalculateMutMutationVariables = Exact<{
  input: Array<InputMaybe<ShoppingCartInput>> | InputMaybe<ShoppingCartInput>;
  paymentMethodId: Scalars['String'];
}>;


export type CheckoutCalculateMutMutation = { __typename?: 'Mutation', CheckoutCalculateMut: { __typename?: 'Checkout', id?: string | null, total?: number | null, clientSecret?: string | null, status?: string | null } };

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder: { __typename?: 'Order', id?: string | null, total?: number | null, orderItems?: Array<{ __typename: 'OrderItem', id?: string | null } | null> | null } };

export type AddOnFieldsFragment = { __typename?: 'AddOn', id?: string | null, name?: string | null, isRequired?: boolean | null, items?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, price?: number | null, itemSizes?: Array<{ __typename?: 'ItemSize', id?: string | null, name?: string | null, price?: number | null, default?: boolean | null } | null> | null } | null> | null };

export type FoodByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FoodByIdQuery = { __typename?: 'Query', foodById?: { __typename?: 'Food', id?: string | null, name?: string | null, description?: string | null, image?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null, addOns?: Array<{ __typename?: 'AddOn', id?: string | null, name?: string | null, isRequired?: boolean | null, items?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, price?: number | null, itemSizes?: Array<{ __typename?: 'ItemSize', id?: string | null, name?: string | null, price?: number | null, default?: boolean | null } | null> | null } | null> | null } | null> | null } | null> | null, addOns?: Array<{ __typename?: 'AddOn', id?: string | null, name?: string | null, isRequired?: boolean | null, items?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, price?: number | null, itemSizes?: Array<{ __typename?: 'ItemSize', id?: string | null, name?: string | null, price?: number | null, default?: boolean | null } | null> | null } | null> | null } | null> | null } | null };

export type FoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsQuery = { __typename?: 'Query', foods: Array<{ __typename?: 'Food', id?: string | null, name?: string | null, description?: string | null, image?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null, addOns?: Array<{ __typename?: 'AddOn', id?: string | null, name?: string | null, isRequired?: boolean | null, items?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, price?: number | null, itemSizes?: Array<{ __typename?: 'ItemSize', id?: string | null, name?: string | null, price?: number | null, default?: boolean | null } | null> | null } | null> | null } | null> | null } | null> | null, addOns?: Array<{ __typename?: 'AddOn', id?: string | null, name?: string | null, isRequired?: boolean | null, items?: Array<{ __typename?: 'Item', id?: string | null, name?: string | null, price?: number | null, itemSizes?: Array<{ __typename?: 'ItemSize', id?: string | null, name?: string | null, price?: number | null, default?: boolean | null } | null> | null } | null> | null } | null> | null } | null> };

export type FoodsByCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type FoodsByCategoryQuery = { __typename?: 'Query', foodsByCategory: Array<{ __typename?: 'FoodsByCategory', category: string, foods?: Array<{ __typename?: 'SimpleFood', id?: string | null, description?: string | null, image?: string | null, name?: string | null, price?: number | null, sizes?: Array<{ __typename?: 'FoodSize', price?: number | null } | null> | null }> | null } | null> };

export type ValidateShoppingCartQueryVariables = Exact<{
  input: Array<InputMaybe<ShoppingCartInput>> | InputMaybe<ShoppingCartInput>;
}>;


export type ValidateShoppingCartQuery = { __typename?: 'Query', validateShoppingCart: { __typename?: 'ShoppingCart', grandTotal?: number | null, subTotal: number, tax?: number | null, tip?: number | null, shoppingCartItems: Array<{ __typename?: 'ShoppingCartItem', orderItemId: string, price: number, quantity: number, food?: { __typename?: 'SimpleFood', id?: string | null, name?: string | null, price?: number | null } | null, selectedSize?: { __typename?: 'FoodSize', id?: string | null, name?: string | null, price?: number | null } | null, selectedItems?: Array<{ __typename?: 'SelectedItem', id: string, name?: string | null, price?: number | null, addOnName: string, itemSize?: { __typename?: 'ItemSize', id?: string | null, name?: string | null, price?: number | null } | null } | null> | null } | null> } };

export const AddOnFieldsFragmentDoc = gql`
    fragment AddOnFields on AddOn {
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
      price
      default
    }
  }
}
    `;
export const CheckoutCalculateMutDocument = gql`
    mutation CheckoutCalculateMut($input: [ShoppingCartInput]!, $paymentMethodId: String!) {
  CheckoutCalculateMut(input: $input, paymentMethodId: $paymentMethodId) {
    id
    total
    clientSecret
    status
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
 *      input: // value for 'input'
 *      paymentMethodId: // value for 'paymentMethodId'
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
export const ValidateShoppingCartDocument = gql`
    query ValidateShoppingCart($input: [ShoppingCartInput]!) {
  validateShoppingCart(input: $input) {
    grandTotal
    subTotal
    tax
    tip
    shoppingCartItems {
      orderItemId
      food {
        id
        name
        price
      }
      selectedSize {
        id
        name
        price
      }
      selectedItems {
        id
        name
        price
        addOnName
        itemSize {
          id
          name
          price
        }
      }
      price
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
 *      input: // value for 'input'
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