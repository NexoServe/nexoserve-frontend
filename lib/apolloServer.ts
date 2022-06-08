import { ApolloServer } from 'apollo-server-micro';
import prisma from './prisma';
import { schema } from '../modules/graphql/schema';

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => ({ req, prisma }),
});

export { apolloServer };
