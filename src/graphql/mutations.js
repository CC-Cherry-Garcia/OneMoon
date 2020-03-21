/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createUserGroup = /* GraphQL */ `
  mutation CreateUserGroup(
    $input: CreateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    createUserGroup(input: $input, condition: $condition) {
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
export const updateUserGroup = /* GraphQL */ `
  mutation UpdateUserGroup(
    $input: UpdateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    updateUserGroup(input: $input, condition: $condition) {
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
export const deleteUserGroup = /* GraphQL */ `
  mutation DeleteUserGroup(
    $input: DeleteUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    deleteUserGroup(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createChallenge = /* GraphQL */ `
  mutation CreateChallenge(
    $input: CreateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    createChallenge(input: $input, condition: $condition) {
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
export const updateChallenge = /* GraphQL */ `
  mutation UpdateChallenge(
    $input: UpdateChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    updateChallenge(input: $input, condition: $condition) {
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
export const deleteChallenge = /* GraphQL */ `
  mutation DeleteChallenge(
    $input: DeleteChallengeInput!
    $condition: ModelChallengeConditionInput
  ) {
    deleteChallenge(input: $input, condition: $condition) {
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
export const createUserChallenge = /* GraphQL */ `
  mutation CreateUserChallenge(
    $input: CreateUserChallengeInput!
    $condition: ModelUserChallengeConditionInput
  ) {
    createUserChallenge(input: $input, condition: $condition) {
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
export const updateUserChallenge = /* GraphQL */ `
  mutation UpdateUserChallenge(
    $input: UpdateUserChallengeInput!
    $condition: ModelUserChallengeConditionInput
  ) {
    updateUserChallenge(input: $input, condition: $condition) {
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
export const deleteUserChallenge = /* GraphQL */ `
  mutation DeleteUserChallenge(
    $input: DeleteUserChallengeInput!
    $condition: ModelUserChallengeConditionInput
  ) {
    deleteUserChallenge(input: $input, condition: $condition) {
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
export const createGroupChallenge = /* GraphQL */ `
  mutation CreateGroupChallenge(
    $input: CreateGroupChallengeInput!
    $condition: ModelGroupChallengeConditionInput
  ) {
    createGroupChallenge(input: $input, condition: $condition) {
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
export const updateGroupChallenge = /* GraphQL */ `
  mutation UpdateGroupChallenge(
    $input: UpdateGroupChallengeInput!
    $condition: ModelGroupChallengeConditionInput
  ) {
    updateGroupChallenge(input: $input, condition: $condition) {
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
export const deleteGroupChallenge = /* GraphQL */ `
  mutation DeleteGroupChallenge(
    $input: DeleteGroupChallengeInput!
    $condition: ModelGroupChallengeConditionInput
  ) {
    deleteGroupChallenge(input: $input, condition: $condition) {
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
