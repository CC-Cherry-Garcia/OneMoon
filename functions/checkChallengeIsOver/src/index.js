/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */
const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');
require('isomorphic-fetch');
const env = require('process').env;
let region = env.AWS_REGION;
let appSyncUrl = env.ENDPOINT;
let apiKey = env.API_KEY;

exports.handler = async () => {
  const getChallenges = gql`
    query {
      listGroupChallenges(filter: {isValid: {eq: "true"}}, limit: 10000) {
        items {
          id
          task30Date
        }
      }
      listUserChallenges(filter: {isValid: {eq: "true"}}, limit: 10000) {
        items {
          id
          task30Date
        }
      }
    }
  `;

  const appSyncClient = new AWSAppSyncClient({
    url: appSyncUrl,
    region,
    auth: {
      type: 'API_KEY',
      apiKey,
    },
    disableOffline: true,
  });

  try {
    const getResult = await appSyncClient.query({
      query: getChallenges,
    });
    console.log('success', getResult);
    console.log(
      'listUserChallenges length :',
      getResult.data.listUserChallenges.items.length,
    );
    console.log(
      'listGroupChallenges length :',
      getResult.data.listGroupChallenges.items.length,
    );

    for (const challenge of getResult.data.listUserChallenges.items) {
      const date = new Date(challenge.task30Date);
      if (Date.now() - date.getTime() > 0) {
        console.log('find passed challenge :', challenge);
        const updateChallenges = gql`mutation {
              updateUserChallenge(input: {id:"${challenge.id}", isValid: "false" }) {
                id
                task30Date
              }
            }
        `;
        const updateResult = await appSyncClient.mutate({
          mutation: updateChallenges,
        });
        console.log('success', updateResult);
      }
    }
    for (const challenge of getResult.data.listGroupChallenges.items) {
      const date = new Date(challenge.task30Date);
      if (Date.now() - date.getTime() > 0) {
        console.log('find passed challenge :', challenge);
        const updateChallenges = gql`mutation {
              updateGroupChallenge(input: {id:"${challenge.id}", isValid: "false" }) {
                id
                task30Date
              }
            }
        `;
        const updateResult = await appSyncClient.mutate({
          mutation: updateChallenges,
        });
        console.log('success', updateResult);
      }
    }
  } catch (err) {
    console.log('err', JSON.stringify(err));
  }
};
