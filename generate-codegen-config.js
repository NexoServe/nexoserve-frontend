const fs = require('fs');
const path = require('path');

console.log('process.env', process.env.NODE_ENV);
// Check if the NEXT_PUBLIC_NODE_ENV environment variable is set
if (!process.env.NODE_ENV) {
  console.error('NEXT_PUBLIC_NODE_ENV environment variable is not set.');
  process.exit(1); // Exit the script with an error code
}

console.log(
  'process.env.NEXT_PUBLIC_NODE_ENV',
  process.env.NEXT_PUBLIC_NODE_ENV,
);

const env = process.env.NODE_ENV;
require('dotenv').config({ path: `.env.${env}` });
console.log('env', env);

let graphqlUri;

if (env === 'development') {
  graphqlUri = 'http://localhost:4000/graphql'; // Development URI
} else if (env === 'staging') {
  graphqlUri = 'https://nexoserve-backend-staging.up.railway.app/'; // Staging URI
} else if (env === 'production') {
  graphqlUri = 'https://nexoserve-backend-production.up.railway.app/'; // Default to Production URI
} else {
  console.error('Invalid NEXT_PUBLIC_NODE_ENV:', env);
  process.exit(1); // Exit the script with an error code
}

const configContent = `
overwrite: true
schema:
  - '${graphqlUri}'
documents: src/graphql/**/*.graphql
generates:
  generated/graphql.tsx:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
require:
  - 'ts-node/register/transpile-only'
`;

fs.writeFileSync(path.resolve(__dirname, 'codegen.yml'), configContent);
console.log(`codegen.yml generated for ${env} environment.`);
