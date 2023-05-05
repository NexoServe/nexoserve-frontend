import { v4 as uuid } from 'uuid';

import { CreateFoodInput } from '../generated/graphql';

const smallToppingsId = uuid();
// const mediumToppingsId = uuid();
// const largeToppingsId = uuid();

export const data: CreateFoodInput[] = [
  {
    id: uuid(),
    name: 'Cheese Pizza',
    description: 'Classic cheese or create your own pizza.',
    price: null,
    category: 'Traditional Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 7.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: 'White Pizza',
    description: 'A sauceless pie topped with mozzarella, and garlic & oil',
    price: null,
    category: 'Traditional Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 11.75,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 23.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: "Meat Lover's Pizza",
    description: 'Pepperoni, sausage, meatballs, and ham.',
    price: null,
    category: 'Speciality Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 16.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 27.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: 'Chicken Deluxe Pizza',
    description: 'Mushrooms, green peppers, black olives, onions, and chicken.',
    price: null,
    category: 'Speciality Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 16.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 27.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: 'Veggie Pizza',
    description: 'Mushrooms, green peppers, onions and black olives.',
    price: null,
    category: 'Speciality Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 16.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 27.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: 'Margherita Pizza',
    description: 'Basil and fresh mozzarella.',
    price: null,
    category: 'Speciality Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 16.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 27.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: 'Deluxe Pizza',
    description:
      'Pepperoni, green peppers, onions, mushrooms, olives, ham, and sausage.',
    price: null,
    category: 'Speciality Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 16.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 27.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: "Sicilian Meat Lover's Pizza",
    description: 'Pepperoni, sausage, meatballs, and ham.',
    price: null,
    category: 'Speciality Sicilian Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 24.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 32.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: 'Sicilian Deluxe Pizza',
    description:
      'Pepperoni, green peppers, onions, mushrooms, olives, ham, and sausage.',
    price: null,
    category: 'Speciality Sicilian Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 24.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 32.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: 'Sicilian Veggie Pizza',
    description: 'Mushrooms, green peppers, onions and black olives.',
    price: null,
    category: 'Speciality Sicilian Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 24.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 32.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    name: 'Sicilian Chicken Deluxe Pizza',
    description: 'Mushrooms, green peppers, onions and black olives.',
    price: null,
    category: 'Speciality Sicilian Pizza',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    sizes: [
      {
        id: uuid(),
        name: `Small 12" (8 Slices)`,
        price: 20.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Medium 16" (12 Slices)`,
        price: 24.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: `Large 24" (24 Slices)`,
        price: 32.99,
        addOns: [
          {
            id: smallToppingsId,
            name: 'Toppings',
            isRequired: true,
            items: [
              {
                id: uuid(),
                name: 'Extra Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Fresh Mozzarella Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ricotta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Feta Cheese',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Sausage',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.5,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.5,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 1.0,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pepperoni',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 0.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.0,
                  },
                  {
                    id: uuid(),
                    name: 'Right Half',
                    price: 0.75,
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
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Ham',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.75,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.0,
                  },
                  {
                    name: 'Right Half',
                    price: 1.75,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Green Peppers',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Onions',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Black Olives',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Anchovies',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Broccoli',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Pineapple',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 1.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 1.5,
                  },
                  {
                    name: 'Right Half',
                    price: 1.25,
                  },
                ],
              },
              {
                id: uuid(),
                name: 'Chicken Tenders',
                price: 0,
                itemSizes: [
                  {
                    id: uuid(),
                    name: 'Left Half',
                    price: 2.25,
                  },
                  {
                    id: uuid(),
                    name: 'Whole',
                    default: true,
                    price: 2.5,
                  },
                  {
                    name: 'Right Half',
                    price: 2.25,
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
              {
                id: uuid(),
                name: 'Ranch',
                price: 2.25,
              },
              {
                id: uuid(),
                name: 'Hot Sauce',
                price: 3.0,
              },
              {
                id: uuid(),
                name: 'Marinara Sauce',
                price: 2.0,
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
    category: 'Appetizers',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    addOns: [
      {
        id: uuid(),
        name: 'Sauce',
        isRequired: true,
        items: [
          {
            id: uuid(),
            name: 'Plain',
            price: 0,
          },
          {
            id: uuid(),
            name: 'Medium',
            price: 0,
          },
          {
            id: uuid(),
            name: 'Hot',
            price: 0,
          },
          {
            id: uuid(),
            name: 'BBQ',
            price: 0,
          },
          {
            id: uuid(),
            name: 'Teriyaki',
            price: 0,
          },
        ],
      },
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
  {
    id: uuid(),
    name: 'Wings',
    description: 'Served with celery or blue cheese and some other stuff',
    price: 8.99,
    category: 'Appetizers',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    addOns: [
      {
        id: uuid(),
        name: 'Sauce',
        isRequired: true,
        items: [
          {
            id: uuid(),
            name: 'Plain',
            price: 0,
          },
          {
            id: uuid(),
            name: 'Medium',
            price: 0,
          },
          {
            id: uuid(),
            name: 'Hot',
            price: 0,
          },
          {
            id: uuid(),
            name: 'BBQ',
            price: 0,
          },
          {
            id: uuid(),
            name: 'Teriyaki',
            price: 0,
          },
        ],
      },
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
  {
    id: uuid(),
    name: 'Mozzarela Sticks',
    description: 'Served with celery or blue cheese and some other stuff',
    price: 8.99,
    category: 'Appetizers',
    image: 'https://api.api-ninjas.com/v1/randomimage?category=food',
    addOns: [
      {
        id: uuid(),
        name: 'Sauce',
        isRequired: true,
        items: [
          {
            id: uuid(),
            name: 'Marinara',
            price: 0,
          },
          {
            id: uuid(),
            name: 'Raspberry',
            price: 0,
          },
        ],
      },
    ],
  },
];
