import { v4 as uuid } from 'uuid';

import { CreateFoodInput } from '../generated/graphql';

export const data: CreateFoodInput[] = [
  {
    id: uuid(),
    name: 'Pizza',
    description: 'Preimum Pizza',
    price: null,
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 7.99,
        addOns: [
          {
            id: uuid(),
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    price: 1.0,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.5,
                      },
                    ],
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Bacon',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    price: 2.0,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.5,
                      },
                    ],
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Mushrooms',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    price: 1.25,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.5,
                      },
                    ],
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                    portions: [
                      {
                        id: uuid(),
                        name: 'Light',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        id: uuid(),
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: uuid(),
            name: 'Side Sauces',
            isRequired: false,
            items: [
              {
                id: uuid(),
                name: 'Blue Cheese',
                price: 1.25,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 14.99,
        addOns: [
          {
            id: uuid(),
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 1.5,
              },
              {
                id: uuid(),
                name: 'Bacon',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Mushrooms',
                price: 1.65,
              },
            ],
          },
          {
            id: uuid(),
            name: 'Side Sauces',
            isRequired: false,
            items: [
              {
                id: uuid(),
                name: 'Blue Cheese',
                price: 1.25,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: uuid(),
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 1.75,
              },
              {
                id: uuid(),
                name: 'Bacon',
                price: 2.5,
              },
              {
                id: uuid(),
                name: 'Mushrooms',
                price: 1.95,
              },
            ],
          },
          {
            id: uuid(),
            name: 'Side Sauces',
            isRequired: false,
            items: [
              {
                id: uuid(),
                name: 'Blue Cheese',
                price: 1.25,
              },
            ],
          },
        ],
      },
    ],
    addOns: null,
  },
  {
    id: uuid(),
    name: 'Boneless Wings',
    description: 'Served with celery or blue cheese and some other stuff',
    price: 8.99,
    addOns: [
      {
        id: uuid(),
        name: 'Dressing',
        isRequired: true,
        items: [
          {
            id: uuid(),
            name: 'Blue Cheese',
            price: 1.25,
          },
          {
            id: uuid(),
            name: 'Ranch',
            price: 1.25,
          },
        ],
      },
      {
        id: uuid(),
        name: 'Veggies',
        isRequired: true,
        items: [
          {
            id: uuid(),
            name: 'Celery',
            price: 0.25,
          },
          {
            id: uuid(),
            name: 'Carrots',
            price: 0.25,
          },
        ],
      },
    ],
  },
];
