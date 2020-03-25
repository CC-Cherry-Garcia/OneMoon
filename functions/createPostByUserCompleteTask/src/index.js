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

exports.handler = (event, context, callback) => {
  let groupId = '';
  let createdByUserId = '';
  let content = '';

  const appSyncClient = new AWSAppSyncClient({
    url: appSyncUrl,
    region,
    auth: {
      type: 'API_KEY',
      apiKey,
    },
    disableOffline: true,
  });

  event.Records.forEach(async record => {
    if (record.eventName == 'MODIFY') {
      const oldItem = record.dynamodb.OldImage; //before
      const newItem = record.dynamodb.NewImage; //after
      for (const key in newItem) {
        if (
          newItem.hasOwnProperty(key) &&
          newItem[key].hasOwnProperty('BOOL')
        ) {
          const newElement = newItem[key]['BOOL'];
          const oldElement = oldItem[key]['BOOL'];
          if (newElement === true && oldElement === false) {
            createdByUserId = newItem.userId['S'];
            groupId = newItem.groupId['S'];
            content = `${createdByUserId} finished Day ${key.replace(
              /[^0-9]/g,
              '',
            )} task!!`;
            break;
          }
        }
      }
    }
    const post = {
      input: {
        groupId,
        createdByUserId,
        createdAt: new Date(),
        content,
        likeCount: 0,
      },
    };
    console.log('post :', post);
    const createPostMutation = gql`
      mutation createPost($input: CreatePostInput!) {
        createPost(input: $input) {
          id
        }
      }
    `;

    try {
      console.log('createPostMutation :', createPostMutation);
      const updateResult = await appSyncClient.mutate({
        variables: post,
        mutation: createPostMutation,
      });
      console.log('success', updateResult);
    } catch (err) {
      console.log('err', JSON.stringify(err));
    }
  });
};
