// /graphql/types/Link.ts
import { booleanArg, extendType, nonNull, objectType, stringArg } from 'nexus';
import { AddOn } from './AddOn';

export const Food = objectType({
  name: `Food`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.string(`description`);
    t.float(`price`);
    t.list.field(`addOns`, {
      type: 'AddOn',
    });
  },
});

export const FoodsQuery = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.list.field(`foods`, {
      type: 'Food',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.food.findMany({
          include: {
            addOns: {
              include: {
                items: true,
              },
            },
          },
        });
      },
    });
  },
});

// export const CreateLinkMutation = extendType({
//   type: `Mutation`,
//   definition(t) {
//     t.nonNull.field(`createLink`, {
//       type: Link,
//       args: {
//         title: nonNull(stringArg()),
//         url: nonNull(stringArg()),
//         imageUrl: nonNull(stringArg()),
//         category: nonNull(stringArg()),
//         description: nonNull(stringArg()),
//       },
//       async resolve(_parent, args, ctx) {
//         const newLink = {
//           title: args.title,
//           url: args.url,
//           imageUrl: args.imageUrl,
//           category: args.category,
//           description: args.description,
//         };

//         return await ctx.prisma.link.create({
//           data: newLink,
//         });
//       },
//     });
//   },
// });
