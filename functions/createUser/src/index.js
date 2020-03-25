/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');
require('isomorphic-fetch');
const env = require('process').env;
const appSyncUrl = env.ENDPOINT;

exports.handler = async event => {
  console.log('Authentication successful');
  const username = event.userName;
  let user = {
    input: {
      id: username,
      name: username,
    },
  };
  const createUserMutation = gql`
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        id
        name
      }
    }
  `;

  const appSyncClient = new AWSAppSyncClient({
    url: appSyncUrl,
    region: env.AWS_REGION,
    auth: {
      type: 'API_KEY',
      apiKey: env.API_KEY,
    },
    disableOffline: true,
  });

  try {
    const result = await appSyncClient.mutate({
      variables: user,
      mutation: createUserMutation,
    });
    console.log('success', result);
  } catch (err) {
    console.log(JSON.stringify(err));
  }
};
