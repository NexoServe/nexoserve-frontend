import { ApolloServer } from 'apollo-server-micro';

import { schema } from '../modules/graphql/schema';
import prisma from './prisma';

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => ({ req, prisma }),
});

export { apolloServer };
