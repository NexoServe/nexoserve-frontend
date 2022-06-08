import { NextApiRequest, NextApiResponse } from 'next';

type CallbackFunction = (
  req: NextApiRequest,
  res: NextApiResponse,
  result: any,
) => void;

export default function initMiddleware(middleware: CallbackFunction) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
