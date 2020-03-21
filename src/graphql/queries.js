/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      groups {
        items {
          userId
          groupId
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        groups {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      users {
        items {
          userId
          groupId
        }
        nextToken
      }
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        users {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserGroup = /* GraphQL */ `
  query GetUserGroup($id: ID!) {
    getUserGroup(id: $id) {
      userId
      groupId
      user {
        id
        name
        groups {
          nextToken
        }
      }
      group {
        id
        name
        users {
          nextToken
        }
      }
    }
  }
`;
export const listUserGroups = /* GraphQL */ `
  query ListUserGroups(
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userId
        groupId
        user {
          id
          name
        }
        group {
          id
          name
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      groupId
      group {
        id
        name
        users {
          nextToken
        }
      }
      createdByUserId
      user {
        id
        name
        groups {
          nextToken
        }
      }
      createdAt
      content
      likeCount
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupId
        group {
          id
          name
        }
        createdByUserId
        user {
          id
          name
        }
        createdAt
        content
        likeCount
      }
      nextToken
    }
  }
`;
export const getChallenge = /* GraphQL */ `
  query GetChallenge($id: ID!) {
    getChallenge(id: $id) {
      id
      title
      createdByUserId
      user {
        id
        name
        groups {
          nextToken
        }
      }
      increase
      task1Name
      task2Name
      task3Name
      task4Name
      task5Name
      task6Name
      task7Name
      task8Name
      task9Name
      task10Name
      task11Name
      task12Name
      task13Name
      task14Name
      task15Name
      task16Name
      task17Name
      task18Name
      task19Name
      task20Name
      task21Name
      task22Name
      task23Name
      task24Name
      task25Name
      task26Name
      task27Name
      task28Name
      task29Name
      task30Name
    }
  }
`;
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdByUserId
        user {
          id
          name
        }
        increase
        task1Name
        task2Name
        task3Name
        task4Name
        task5Name
        task6Name
        task7Name
        task8Name
        task9Name
        task10Name
        task11Name
        task12Name
        task13Name
        task14Name
        task15Name
        task16Name
        task17Name
        task18Name
        task19Name
        task20Name
        task21Name
        task22Name
        task23Name
        task24Name
        task25Name
        task26Name
        task27Name
        task28Name
        task29Name
        task30Name
      }
      nextToken
    }
  }
`;
export const getUserChallenge = /* GraphQL */ `
  query GetUserChallenge($id: ID!) {
    getUserChallenge(id: $id) {
      id
      challengeId
      challenge {
        id
        title
        createdByUserId
        user {
          id
          name
        }
        increase
        task1Name
        task2Name
        task3Name
        task4Name
        task5Name
        task6Name
        task7Name
        task8Name
        task9Name
        task10Name
        task11Name
        task12Name
        task13Name
        task14Name
        task15Name
        task16Name
        task17Name
        task18Name
        task19Name
        task20Name
        task21Name
        task22Name
        task23Name
        task24Name
        task25Name
        task26Name
        task27Name
        task28Name
        task29Name
        task30Name
      }
      userId
      user {
        id
        name
        groups {
          nextToken
        }
      }
      startDate
      isValid
      task1IsDone
      task1Date
      task2IsDone
      task2Date
      task3IsDone
      task3Date
      task4IsDone
      task4Date
      task5IsDone
      task5Date
      task6IsDone
      task6Date
      task7IsDone
      task7Date
      task8IsDone
      task8Date
      task9IsDone
      task9Date
      task10IsDone
      task10Date
      task11IsDone
      task11Date
      task12IsDone
      task12Date
      task13IsDone
      task13Date
      task14IsDone
      task14Date
      task15IsDone
      task15Date
      task16IsDone
      task16Date
      task17IsDone
      task17Date
      task18IsDone
      task18Date
      task19IsDone
      task19Date
      task20IsDone
      task20Date
      task21IsDone
      task21Date
      task22IsDone
      task22Date
      task23IsDone
      task23Date
      task24IsDone
      task24Date
      task25IsDone
      task25Date
      task26IsDone
      task26Date
      task27IsDone
      task27Date
      task28IsDone
      task28Date
      task29IsDone
      task29Date
      task30IsDone
      task30Date
    }
  }
`;
export const listUserChallenges = /* GraphQL */ `
  query ListUserChallenges(
    $filter: ModelUserChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        challengeId
        challenge {
          id
          title
          createdByUserId
          increase
          task1Name
          task2Name
          task3Name
          task4Name
          task5Name
          task6Name
          task7Name
          task8Name
          task9Name
          task10Name
          task11Name
          task12Name
          task13Name
          task14Name
          task15Name
          task16Name
          task17Name
          task18Name
          task19Name
          task20Name
          task21Name
          task22Name
          task23Name
          task24Name
          task25Name
          task26Name
          task27Name
          task28Name
          task29Name
          task30Name
        }
        userId
        user {
          id
          name
        }
        startDate
        isValid
        task1IsDone
        task1Date
        task2IsDone
        task2Date
        task3IsDone
        task3Date
        task4IsDone
        task4Date
        task5IsDone
        task5Date
        task6IsDone
        task6Date
        task7IsDone
        task7Date
        task8IsDone
        task8Date
        task9IsDone
        task9Date
        task10IsDone
        task10Date
        task11IsDone
        task11Date
        task12IsDone
        task12Date
        task13IsDone
        task13Date
        task14IsDone
        task14Date
        task15IsDone
        task15Date
        task16IsDone
        task16Date
        task17IsDone
        task17Date
        task18IsDone
        task18Date
        task19IsDone
        task19Date
        task20IsDone
        task20Date
        task21IsDone
        task21Date
        task22IsDone
        task22Date
        task23IsDone
        task23Date
        task24IsDone
        task24Date
        task25IsDone
        task25Date
        task26IsDone
        task26Date
        task27IsDone
        task27Date
        task28IsDone
        task28Date
        task29IsDone
        task29Date
        task30IsDone
        task30Date
      }
      nextToken
    }
  }
`;
export const getGroupChallenge = /* GraphQL */ `
  query GetGroupChallenge($id: ID!) {
    getGroupChallenge(id: $id) {
      id
      challengeId
      challenge {
        id
        title
        createdByUserId
        user {
          id
          name
        }
        increase
        task1Name
        task2Name
        task3Name
        task4Name
        task5Name
        task6Name
        task7Name
        task8Name
        task9Name
        task10Name
        task11Name
        task12Name
        task13Name
        task14Name
        task15Name
        task16Name
        task17Name
        task18Name
        task19Name
        task20Name
        task21Name
        task22Name
        task23Name
        task24Name
        task25Name
        task26Name
        task27Name
        task28Name
        task29Name
        task30Name
      }
      userId
      user {
        id
        name
        groups {
          nextToken
        }
      }
      groupId
      group {
        id
        name
        users {
          nextToken
        }
      }
      startDate
      isValid
      task1IsDone
      task1Date
      task2IsDone
      task2Date
      task3IsDone
      task3Date
      task4IsDone
      task4Date
      task5IsDone
      task5Date
      task6IsDone
      task6Date
      task7IsDone
      task7Date
      task8IsDone
      task8Date
      task9IsDone
      task9Date
      task10IsDone
      task10Date
      task11IsDone
      task11Date
      task12IsDone
      task12Date
      task13IsDone
      task13Date
      task14IsDone
      task14Date
      task15IsDone
      task15Date
      task16IsDone
      task16Date
      task17IsDone
      task17Date
      task18IsDone
      task18Date
      task19IsDone
      task19Date
      task20IsDone
      task20Date
      task21IsDone
      task21Date
      task22IsDone
      task22Date
      task23IsDone
      task23Date
      task24IsDone
      task24Date
      task25IsDone
      task25Date
      task26IsDone
      task26Date
      task27IsDone
      task27Date
      task28IsDone
      task28Date
      task29IsDone
      task29Date
      task30IsDone
      task30Date
    }
  }
`;
export const listGroupChallenges = /* GraphQL */ `
  query ListGroupChallenges(
    $filter: ModelGroupChallengeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        challengeId
        challenge {
          id
          title
          createdByUserId
          increase
          task1Name
          task2Name
          task3Name
          task4Name
          task5Name
          task6Name
          task7Name
          task8Name
          task9Name
          task10Name
          task11Name
          task12Name
          task13Name
          task14Name
          task15Name
          task16Name
          task17Name
          task18Name
          task19Name
          task20Name
          task21Name
          task22Name
          task23Name
          task24Name
          task25Name
          task26Name
          task27Name
          task28Name
          task29Name
          task30Name
        }
        userId
        user {
          id
          name
        }
        groupId
        group {
          id
          name
        }
        startDate
        isValid
        task1IsDone
        task1Date
        task2IsDone
        task2Date
        task3IsDone
        task3Date
        task4IsDone
        task4Date
        task5IsDone
        task5Date
        task6IsDone
        task6Date
        task7IsDone
        task7Date
        task8IsDone
        task8Date
        task9IsDone
        task9Date
        task10IsDone
        task10Date
        task11IsDone
        task11Date
        task12IsDone
        task12Date
        task13IsDone
        task13Date
        task14IsDone
        task14Date
        task15IsDone
        task15Date
        task16IsDone
        task16Date
        task17IsDone
        task17Date
        task18IsDone
        task18Date
        task19IsDone
        task19Date
        task20IsDone
        task20Date
        task21IsDone
        task21Date
        task22IsDone
        task22Date
        task23IsDone
        task23Date
        task24IsDone
        task24Date
        task25IsDone
        task25Date
        task26IsDone
        task26Date
        task27IsDone
        task27Date
        task28IsDone
        task28Date
        task29IsDone
        task29Date
        task30IsDone
        task30Date
      }
      nextToken
    }
  }
`;
