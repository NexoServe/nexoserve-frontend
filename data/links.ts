import { CreateFoodInput } from '../generated/graphql';

export const data: CreateFoodInput[] = [
  {
    name: 'Pizza',
    description: 'Preimum Pizza',
    price: null,
    sizes: [
      {
        name: `Small 12" (8 Slices)`,
        price: 7.99,
        addOns: [
          {
            id: '1a1121b2-363b-4a4f-ad26-d6c35b41b2de',
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: '119122b2-363b-4a4f-ad26-d6c55b51b5ed',
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    name: 'Left Half',
                    price: 0.75,
                    portions: [
                      {
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                  {
                    name: 'Whole',
                    price: 1.0,
                    portions: [
                      {
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        name: 'Extra',
                        price: 0.5,
                      },
                    ],
                  },
                  {
                    name: 'Right Half',
                    price: 0.75,
                    portions: [
                      {
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                ],
              },
              {
                id: '619122b2-3j3b-4a4f-ad26-d6c55b51b1ed',
                name: 'Bacon',
                price: 0,
                itemSizes: [
                  {
                    name: 'Left Half',
                    price: 1.75,
                    portions: [
                      {
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                  {
                    name: 'Whole',
                    price: 2.0,
                    portions: [
                      {
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
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
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                ],
              },
              {
                id: '639172b2-363b-4alf-as26-d6c55b51b1ed',
                name: 'Mushrooms',
                price: 0,
                itemSizes: [
                  {
                    name: 'Left Half',
                    price: 1.0,
                    portions: [
                      {
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                  {
                    name: 'Whole',
                    price: 1.25,
                    portions: [
                      {
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        name: 'Extra',
                        price: 0.5,
                      },
                    ],
                  },
                  {
                    name: 'Right Half',
                    price: 1.0,
                    portions: [
                      {
                        name: 'Light',
                        price: 0,
                      },
                      {
                        name: 'Regular',
                        price: 0,
                      },
                      {
                        name: 'Extra',
                        price: 0.25,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: `Medium 16" (12 Slices)`,
        price: 14.99,
        addOns: [
          {
            id: '2',
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: '119122b2-363b-4a4f-ad26-d6c51b51baed',
                name: 'Pepperoni',
                price: 1.5,
              },
              {
                id: '619122b2-363b-4a4f-ad26-d6c55b51h1ed',
                name: 'Bacon',
                price: 2.25,
              },
              {
                id: '639172b2-363b-4a4f-as2l-d6c55b51b1ed',
                name: 'Mushrooms',
                price: 1.65,
              },
            ],
          },
        ],
      },
      {
        name: `Large 24" (24 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: '2',
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: '119122b2-363b-4a4f-ad26-d6c55b5tbaed',
                name: 'Pepperoni',
                price: 1.75,
              },
              {
                id: '619122b2-36ob-4a4f-ad26-d6c55b51b1ed',
                name: 'Bacon',
                price: 2.5,
              },
              {
                id: '639172b2-363b-4a4f-as26-d6c55b51b16d',
                name: 'Mushrooms',
                price: 1.95,
              },
            ],
          },
        ],
      },
    ],
    addOns: null,
  },
];
