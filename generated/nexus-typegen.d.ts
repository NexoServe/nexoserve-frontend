/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../types/Context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CheckoutCalculateInput: { // input type
    id?: string | null; // String
    orders?: NexusGenInputs['CreateOrderInput'][] | null; // [CreateOrderInput!]
  }
  CreateAddOnInput: { // input type
    id?: string | null; // String
    isRequired: boolean; // Boolean!
    items: NexusGenInputs['CreateItemInput'][]; // [CreateItemInput!]!
    name: string; // String!
  }
  CreateFoodInput: { // input type
    addOns?: NexusGenInputs['CreateAddOnInput'][] | null; // [CreateAddOnInput!]
    category: string; // String!
    description?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    name: string; // String!
    price?: number | null; // Float
    sizes?: NexusGenInputs['CreateFoodSizeInput'][] | null; // [CreateFoodSizeInput!]
  }
  CreateFoodSizeInput: { // input type
    addOns: NexusGenInputs['CreateAddOnInput'][]; // [CreateAddOnInput!]!
    id?: string | null; // String
    name: string; // String!
    price: number; // Float!
  }
  CreateItemInput: { // input type
    id?: string | null; // String
    itemSizes?: NexusGenInputs['ItemSizeInput'][] | null; // [ItemSizeInput!]
    name: string; // String!
    price: number; // Float!
  }
  CreateOrderInput: { // input type
    foodId: string; // String!
    id?: string | null; // String
    itemIds: Array<string | null>; // [String]!
    quantity: number; // Int!
  }
  CreateOrderItemInput: { // input type
    foodId: string; // String!
    id?: string | null; // String
    items: string[]; // [String!]!
  }
  DayInput: { // input type
    dayOfWeek: string; // String!
    time: NexusGenInputs['TimeInput'][]; // [TimeInput!]!
  }
  ItemSizeInput: { // input type
    default?: boolean | null; // Boolean
    id?: string | null; // String
    name: string; // String!
    price: number; // Float!
  }
  LocationInput: { // input type
    latitude?: number | null; // Float
    longitude?: number | null; // Float
  }
  RestaurantInput: { // input type
    deliveryAddress?: string | null; // String
    deliveryAddressAdditionalInfo?: string | null; // String
    deliveryDetails?: string | null; // String
    isPickUp: boolean; // Boolean!
    orderTime: string; // String!
    restaurantId: string; // String!
  }
  ShoppingCartInput: { // input type
    foodId: string; // String!
    foodSizeId?: string | null; // String
    isTipPercentage?: boolean | null; // Boolean
    items: Array<NexusGenInputs['ShoppingCartItemInput'] | null>; // [ShoppingCartItemInput]!
    orderItemId: string; // String!
    quantity: number; // Int!
    tip?: number | null; // Float
  }
  ShoppingCartItemInput: { // input type
    addOnName: string; // String!
    itemId: string; // String!
    itemSizeId?: string | null; // String
  }
  TimeInput: { // input type
    closes_at?: string | null; // String
    opens_at?: string | null; // String
  }
  ValidateOrderDetailsInput: { // input type
    deliveryAddress?: string | null; // String
    deliveryAddressAdditionalInfo?: string | null; // String
    deliveryDetails?: string | null; // String
    isPickUp: boolean; // Boolean!
    orderTime: string; // String!
    restaurantId: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AddOn: { // root type
    foods?: Array<NexusGenRootTypes['Food'] | null> | null; // [Food]
    id?: string | null; // String
    isRequired?: boolean | null; // Boolean
    items?: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
    name?: string | null; // String
  }
  BaseFood: { // root type
    id?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Float
  }
  Checkout: { // root type
    clientSecret?: string | null; // String
    id?: string | null; // String
    status?: string | null; // String
    total?: number | null; // Float
  }
  DayOutput: { // root type
    dayOfWeek: string; // String!
    time: NexusGenRootTypes['TimeOutput'][]; // [TimeOutput!]!
  }
  Food: { // root type
    addOns?: Array<NexusGenRootTypes['AddOn'] | null> | null; // [AddOn]
    description?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Float
    sizes?: Array<NexusGenRootTypes['FoodSize'] | null> | null; // [FoodSize]
  }
  FoodSize: { // root type
    addOns?: Array<NexusGenRootTypes['AddOn'] | null> | null; // [AddOn]
    id?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Float
  }
  FoodsByCategory: { // root type
    category: string; // String!
    foods?: NexusGenRootTypes['SimpleFood'][] | null; // [SimpleFood!]
  }
  Item: { // root type
    addOns?: Array<NexusGenRootTypes['AddOn'] | null> | null; // [AddOn]
    id?: string | null; // String
    itemSizes?: Array<NexusGenRootTypes['ItemSize'] | null> | null; // [ItemSize]
    name?: string | null; // String
    price?: number | null; // Float
  }
  ItemSize: { // root type
    default?: boolean | null; // Boolean
    id?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Float
  }
  Location: { // root type
    id?: string | null; // String
    latitude?: number | null; // Float
    longitude?: number | null; // Float
  }
  Mutation: {};
  OpeningHour: { // root type
    closeTime: string; // String!
    dayOfWeek: string; // String!
    id: number; // Int!
    openTime: string; // String!
    restaurantId: number; // Int!
  }
  Order: { // root type
    id?: string | null; // String
    orderItems?: Array<NexusGenRootTypes['OrderItem'] | null> | null; // [OrderItem]
    total?: number | null; // Float
  }
  OrderItem: { // root type
    food?: NexusGenRootTypes['Food'] | null; // Food
    id?: string | null; // String
    items?: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
  }
  Query: {};
  Restaurant: { // root type
    address: string; // String!
    currentDateTime: string; // String!
    deliveryAddress?: string | null; // String
    deliveryAddressAdditionalInfo?: string | null; // String
    deliveryDetails?: string | null; // String
    isDeliveryAddressValid: boolean; // Boolean!
    isOpenNow: boolean; // Boolean!
    isOrderTimeValid: boolean; // Boolean!
    isPickUp: boolean; // Boolean!
    location: NexusGenRootTypes['Location']; // Location!
    menu: NexusGenRootTypes['FoodsByCategory'][]; // [FoodsByCategory!]!
    name: string; // String!
    openingHours: NexusGenRootTypes['DayOutput'][]; // [DayOutput!]!
    timezone: string; // String!
  }
  SelectedItem: { // root type
    addOnName: string; // String!
    id: string; // String!
    itemSize?: NexusGenRootTypes['ItemSize'] | null; // ItemSize
    name?: string | null; // String
    price?: number | null; // Float
  }
  ShoppingCart: { // root type
    grandTotal?: number | null; // Float
    shoppingCartItems: Array<NexusGenRootTypes['ShoppingCartItem'] | null>; // [ShoppingCartItem]!
    subTotal: number; // Float!
    tax?: number | null; // Float
    tip?: number | null; // Float
  }
  ShoppingCartItem: { // root type
    food?: NexusGenRootTypes['SimpleFood'] | null; // SimpleFood
    orderItemId: string; // String!
    price: number; // Float!
    quantity: number; // Int!
    selectedItems?: Array<NexusGenRootTypes['SelectedItem'] | null> | null; // [SelectedItem]
    selectedSize?: NexusGenRootTypes['FoodSize'] | null; // FoodSize
  }
  SimpleFood: { // root type
    description?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Float
    sizes?: Array<NexusGenRootTypes['FoodSize'] | null> | null; // [FoodSize]
  }
  SimpleFoodSize: { // root type
    id?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Float
  }
  TimeOutput: { // root type
    closes_at?: string | null; // String
    opens_at?: string | null; // String
  }
  ValidateOrderDetailsType: { // root type
    address: string; // String!
    currentDateTime: string; // String!
    deliveryAddress?: string | null; // String
    deliveryAddressAdditionalInfo?: string | null; // String
    deliveryDetails?: string | null; // String
    isDeliveryAddressValid: boolean; // Boolean!
    isOpenNow: boolean; // Boolean!
    isOrderTimeValid: boolean; // Boolean!
    isPickUp: boolean; // Boolean!
    location: NexusGenRootTypes['Location']; // Location!
    menu: NexusGenRootTypes['FoodsByCategory'][]; // [FoodsByCategory!]!
    openingHours: NexusGenRootTypes['DayOutput'][]; // [DayOutput!]!
    timezone: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AddOn: { // field return type
    foods: Array<NexusGenRootTypes['Food'] | null> | null; // [Food]
    id: string | null; // String
    isRequired: boolean | null; // Boolean
    items: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
    name: string | null; // String
  }
  BaseFood: { // field return type
    id: string | null; // String
    name: string | null; // String
    price: number | null; // Float
  }
  Checkout: { // field return type
    clientSecret: string | null; // String
    id: string | null; // String
    status: string | null; // String
    total: number | null; // Float
  }
  DayOutput: { // field return type
    dayOfWeek: string; // String!
    time: NexusGenRootTypes['TimeOutput'][]; // [TimeOutput!]!
  }
  Food: { // field return type
    addOns: Array<NexusGenRootTypes['AddOn'] | null> | null; // [AddOn]
    description: string | null; // String
    id: string | null; // String
    image: string | null; // String
    name: string | null; // String
    price: number | null; // Float
    sizes: Array<NexusGenRootTypes['FoodSize'] | null> | null; // [FoodSize]
  }
  FoodSize: { // field return type
    addOns: Array<NexusGenRootTypes['AddOn'] | null> | null; // [AddOn]
    id: string | null; // String
    name: string | null; // String
    price: number | null; // Float
  }
  FoodsByCategory: { // field return type
    category: string; // String!
    foods: NexusGenRootTypes['SimpleFood'][] | null; // [SimpleFood!]
  }
  Item: { // field return type
    addOns: Array<NexusGenRootTypes['AddOn'] | null> | null; // [AddOn]
    id: string | null; // String
    itemSizes: Array<NexusGenRootTypes['ItemSize'] | null> | null; // [ItemSize]
    name: string | null; // String
    price: number | null; // Float
  }
  ItemSize: { // field return type
    default: boolean | null; // Boolean
    id: string | null; // String
    name: string | null; // String
    price: number | null; // Float
  }
  Location: { // field return type
    id: string | null; // String
    latitude: number | null; // Float
    longitude: number | null; // Float
  }
  Mutation: { // field return type
    CheckoutCalculateMut: NexusGenRootTypes['Checkout']; // Checkout!
    addOpeningHours: boolean | null; // Boolean
    createFood: NexusGenRootTypes['Food']; // Food!
    createOrder: NexusGenRootTypes['Order']; // Order!
    createRestaurant: boolean | null; // Boolean
  }
  OpeningHour: { // field return type
    closeTime: string; // String!
    dayOfWeek: string; // String!
    id: number; // Int!
    openTime: string; // String!
    restaurantId: number; // Int!
  }
  Order: { // field return type
    id: string | null; // String
    orderItems: Array<NexusGenRootTypes['OrderItem'] | null> | null; // [OrderItem]
    total: number | null; // Float
  }
  OrderItem: { // field return type
    food: NexusGenRootTypes['Food'] | null; // Food
    id: string | null; // String
    items: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
  }
  Query: { // field return type
    addOns: Array<NexusGenRootTypes['AddOn'] | null>; // [AddOn]!
    foodById: NexusGenRootTypes['Food'] | null; // Food
    foods: Array<NexusGenRootTypes['Food'] | null>; // [Food]!
    foodsByCategory: Array<NexusGenRootTypes['FoodsByCategory'] | null>; // [FoodsByCategory]!
    restaurant: NexusGenRootTypes['Restaurant']; // Restaurant!
    validateOrderDetails: NexusGenRootTypes['ValidateOrderDetailsType']; // ValidateOrderDetailsType!
    validateShoppingCart: NexusGenRootTypes['ShoppingCart']; // ShoppingCart!
  }
  Restaurant: { // field return type
    address: string; // String!
    currentDateTime: string; // String!
    deliveryAddress: string | null; // String
    deliveryAddressAdditionalInfo: string | null; // String
    deliveryDetails: string | null; // String
    isDeliveryAddressValid: boolean; // Boolean!
    isOpenNow: boolean; // Boolean!
    isOrderTimeValid: boolean; // Boolean!
    isPickUp: boolean; // Boolean!
    location: NexusGenRootTypes['Location']; // Location!
    menu: NexusGenRootTypes['FoodsByCategory'][]; // [FoodsByCategory!]!
    name: string; // String!
    openingHours: NexusGenRootTypes['DayOutput'][]; // [DayOutput!]!
    timezone: string; // String!
  }
  SelectedItem: { // field return type
    addOnName: string; // String!
    id: string; // String!
    itemSize: NexusGenRootTypes['ItemSize'] | null; // ItemSize
    name: string | null; // String
    price: number | null; // Float
  }
  ShoppingCart: { // field return type
    grandTotal: number | null; // Float
    shoppingCartItems: Array<NexusGenRootTypes['ShoppingCartItem'] | null>; // [ShoppingCartItem]!
    subTotal: number; // Float!
    tax: number | null; // Float
    tip: number | null; // Float
  }
  ShoppingCartItem: { // field return type
    food: NexusGenRootTypes['SimpleFood'] | null; // SimpleFood
    orderItemId: string; // String!
    price: number; // Float!
    quantity: number; // Int!
    selectedItems: Array<NexusGenRootTypes['SelectedItem'] | null> | null; // [SelectedItem]
    selectedSize: NexusGenRootTypes['FoodSize'] | null; // FoodSize
  }
  SimpleFood: { // field return type
    description: string | null; // String
    id: string | null; // String
    image: string | null; // String
    name: string | null; // String
    price: number | null; // Float
    sizes: Array<NexusGenRootTypes['FoodSize'] | null> | null; // [FoodSize]
  }
  SimpleFoodSize: { // field return type
    id: string | null; // String
    name: string | null; // String
    price: number | null; // Float
  }
  TimeOutput: { // field return type
    closes_at: string | null; // String
    opens_at: string | null; // String
  }
  ValidateOrderDetailsType: { // field return type
    address: string; // String!
    currentDateTime: string; // String!
    deliveryAddress: string | null; // String
    deliveryAddressAdditionalInfo: string | null; // String
    deliveryDetails: string | null; // String
    isDeliveryAddressValid: boolean; // Boolean!
    isOpenNow: boolean; // Boolean!
    isOrderTimeValid: boolean; // Boolean!
    isPickUp: boolean; // Boolean!
    location: NexusGenRootTypes['Location']; // Location!
    menu: NexusGenRootTypes['FoodsByCategory'][]; // [FoodsByCategory!]!
    openingHours: NexusGenRootTypes['DayOutput'][]; // [DayOutput!]!
    timezone: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AddOn: { // field return type name
    foods: 'Food'
    id: 'String'
    isRequired: 'Boolean'
    items: 'Item'
    name: 'String'
  }
  BaseFood: { // field return type name
    id: 'String'
    name: 'String'
    price: 'Float'
  }
  Checkout: { // field return type name
    clientSecret: 'String'
    id: 'String'
    status: 'String'
    total: 'Float'
  }
  DayOutput: { // field return type name
    dayOfWeek: 'String'
    time: 'TimeOutput'
  }
  Food: { // field return type name
    addOns: 'AddOn'
    description: 'String'
    id: 'String'
    image: 'String'
    name: 'String'
    price: 'Float'
    sizes: 'FoodSize'
  }
  FoodSize: { // field return type name
    addOns: 'AddOn'
    id: 'String'
    name: 'String'
    price: 'Float'
  }
  FoodsByCategory: { // field return type name
    category: 'String'
    foods: 'SimpleFood'
  }
  Item: { // field return type name
    addOns: 'AddOn'
    id: 'String'
    itemSizes: 'ItemSize'
    name: 'String'
    price: 'Float'
  }
  ItemSize: { // field return type name
    default: 'Boolean'
    id: 'String'
    name: 'String'
    price: 'Float'
  }
  Location: { // field return type name
    id: 'String'
    latitude: 'Float'
    longitude: 'Float'
  }
  Mutation: { // field return type name
    CheckoutCalculateMut: 'Checkout'
    addOpeningHours: 'Boolean'
    createFood: 'Food'
    createOrder: 'Order'
    createRestaurant: 'Boolean'
  }
  OpeningHour: { // field return type name
    closeTime: 'String'
    dayOfWeek: 'String'
    id: 'Int'
    openTime: 'String'
    restaurantId: 'Int'
  }
  Order: { // field return type name
    id: 'String'
    orderItems: 'OrderItem'
    total: 'Float'
  }
  OrderItem: { // field return type name
    food: 'Food'
    id: 'String'
    items: 'Item'
  }
  Query: { // field return type name
    addOns: 'AddOn'
    foodById: 'Food'
    foods: 'Food'
    foodsByCategory: 'FoodsByCategory'
    restaurant: 'Restaurant'
    validateOrderDetails: 'ValidateOrderDetailsType'
    validateShoppingCart: 'ShoppingCart'
  }
  Restaurant: { // field return type name
    address: 'String'
    currentDateTime: 'String'
    deliveryAddress: 'String'
    deliveryAddressAdditionalInfo: 'String'
    deliveryDetails: 'String'
    isDeliveryAddressValid: 'Boolean'
    isOpenNow: 'Boolean'
    isOrderTimeValid: 'Boolean'
    isPickUp: 'Boolean'
    location: 'Location'
    menu: 'FoodsByCategory'
    name: 'String'
    openingHours: 'DayOutput'
    timezone: 'String'
  }
  SelectedItem: { // field return type name
    addOnName: 'String'
    id: 'String'
    itemSize: 'ItemSize'
    name: 'String'
    price: 'Float'
  }
  ShoppingCart: { // field return type name
    grandTotal: 'Float'
    shoppingCartItems: 'ShoppingCartItem'
    subTotal: 'Float'
    tax: 'Float'
    tip: 'Float'
  }
  ShoppingCartItem: { // field return type name
    food: 'SimpleFood'
    orderItemId: 'String'
    price: 'Float'
    quantity: 'Int'
    selectedItems: 'SelectedItem'
    selectedSize: 'FoodSize'
  }
  SimpleFood: { // field return type name
    description: 'String'
    id: 'String'
    image: 'String'
    name: 'String'
    price: 'Float'
    sizes: 'FoodSize'
  }
  SimpleFoodSize: { // field return type name
    id: 'String'
    name: 'String'
    price: 'Float'
  }
  TimeOutput: { // field return type name
    closes_at: 'String'
    opens_at: 'String'
  }
  ValidateOrderDetailsType: { // field return type name
    address: 'String'
    currentDateTime: 'String'
    deliveryAddress: 'String'
    deliveryAddressAdditionalInfo: 'String'
    deliveryDetails: 'String'
    isDeliveryAddressValid: 'Boolean'
    isOpenNow: 'Boolean'
    isOrderTimeValid: 'Boolean'
    isPickUp: 'Boolean'
    location: 'Location'
    menu: 'FoodsByCategory'
    openingHours: 'DayOutput'
    timezone: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    CheckoutCalculateMut: { // args
      input: Array<NexusGenInputs['ShoppingCartInput'] | null>; // [ShoppingCartInput]!
      paymentMethodId: string; // String!
    }
    addOpeningHours: { // args
      openingHours: NexusGenInputs['DayInput'][]; // [DayInput!]!
      restaurantId: string; // String!
    }
    createFood: { // args
      input: NexusGenInputs['CreateFoodInput']; // CreateFoodInput!
      restaurantId: string; // String!
    }
    createOrder: { // args
      input: NexusGenInputs['CreateOrderInput']; // CreateOrderInput!
    }
    createRestaurant: { // args
      name: string; // String!
      restaurantId: string; // String!
      timezone: string; // String!
    }
  }
  Query: {
    foodById: { // args
      id: string; // String!
    }
    restaurant: { // args
      input: NexusGenInputs['RestaurantInput']; // RestaurantInput!
    }
    validateOrderDetails: { // args
      input: NexusGenInputs['ValidateOrderDetailsInput']; // ValidateOrderDetailsInput!
    }
    validateShoppingCart: { // args
      input: Array<NexusGenInputs['ShoppingCartInput'] | null>; // [ShoppingCartInput]!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}