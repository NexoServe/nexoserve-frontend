import Cors from 'micro-cors';
import { apolloServer } from 'lib/apolloServer';

const cors = Cors();

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === `OPTIONS`) {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({
    path: `/api/graphql`,
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
