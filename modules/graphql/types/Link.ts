// /graphql/types/Link.ts
import { booleanArg, extendType, nonNull, objectType } from 'nexus';
import { User } from './User';

export const Link = objectType({
  name: `Link`,
  definition(t) {
    t.string(`id`);
    t.string(`title`);
    t.string(`url`);
    t.string(`description`);
    t.string(`imageUrl`);
    t.string(`category`);
    t.list.field(`users`, {
      type: User,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.link
          .findUnique({
            where: {
              id: parent.id || undefined,
            },
          })
          .users();
      },
    });
  },
});

export const LinksQuery = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.list.field(`links`, {
      type: `Link`,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.link.findMany();
      },
    });
  },
});

export const testQuery = extendType({
  type: `Query`,
  definition: (t) => {
    t.boolean(`test`, {
      args: { bool: nonNull(booleanArg()) },
      resolve: (_, { bool }, ctx) => {
        ctx.prisma.user.create({
          data: {},
        });
        return bool;
      },
    });
  },
});
