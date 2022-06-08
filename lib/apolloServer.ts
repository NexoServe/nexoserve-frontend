import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../modules/graphql/schema';

const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => ({ req }),
});

export { apolloServer };
