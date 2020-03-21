/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup {
    onCreateUserGroup {
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
export const onUpdateUserGroup = /* GraphQL */ `
  subscription OnUpdateUserGroup {
    onUpdateUserGroup {
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
export const onDeleteUserGroup = /* GraphQL */ `
  subscription OnDeleteUserGroup {
    onDeleteUserGroup {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateChallenge = /* GraphQL */ `
  subscription OnCreateChallenge {
    onCreateChallenge {
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
export const onUpdateChallenge = /* GraphQL */ `
  subscription OnUpdateChallenge {
    onUpdateChallenge {
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
export const onDeleteChallenge = /* GraphQL */ `
  subscription OnDeleteChallenge {
    onDeleteChallenge {
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
export const onCreateUserChallenge = /* GraphQL */ `
  subscription OnCreateUserChallenge {
    onCreateUserChallenge {
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
export const onUpdateUserChallenge = /* GraphQL */ `
  subscription OnUpdateUserChallenge {
    onUpdateUserChallenge {
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
export const onDeleteUserChallenge = /* GraphQL */ `
  subscription OnDeleteUserChallenge {
    onDeleteUserChallenge {
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
export const onCreateGroupChallenge = /* GraphQL */ `
  subscription OnCreateGroupChallenge {
    onCreateGroupChallenge {
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
export const onUpdateGroupChallenge = /* GraphQL */ `
  subscription OnUpdateGroupChallenge {
    onUpdateGroupChallenge {
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
export const onDeleteGroupChallenge = /* GraphQL */ `
  subscription OnDeleteGroupChallenge {
    onDeleteGroupChallenge {
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
