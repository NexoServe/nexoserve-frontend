// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://b1a50373afef485108c11c0defc7c439@o4506366317297664.ingest.sentry.io/4506367450349568',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
  enabled: process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development',
});
