import { PrismaClient } from '@prisma/client';
import { MicroRequest } from 'apollo-server-micro/dist/types';
import Stripe from 'stripe';

export interface Context {
  req: MicroRequest;
  prisma: PrismaClient;
  stripe: Stripe;
}
