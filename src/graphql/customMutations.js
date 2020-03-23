export const createNewChallenge = /* GraphQL */ `
  mutation createNewUserChallenge($inputChallenge: CreateChallengeInput!) {
    createChallenge(input: $inputChallenge) {
      id
    }
  }
`;

export const createUserChallengeWithGroupAndChallenge = /* GraphQL */ `
  mutation createUserChallengeWithGroupAndChallenge(
    $inputUserChallenge: CreateUserChallengeInput!
  ) {
    createUserChallenge(input: $inputUserChallenge) {
      id
      challengeId
      challenge {
        id
        title
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
      startDate
      isValid
      task1IsDone
      task2IsDone
      task3IsDone
      task4IsDone
      task6IsDone
      task7IsDone
      task8IsDone
      task9IsDone
      task10IsDone
      task11IsDone
      task12IsDone
      task13IsDone
      task14IsDone
      task15IsDone
      task16IsDone
      task17IsDone
      task18IsDone
      task19IsDone
      task20IsDone
      task21IsDone
      task22IsDone
      task23IsDone
      task24IsDone
      task25IsDone
      task26IsDone
      task27IsDone
      task28IsDone
      task29IsDone
      task30IsDone
    }
  }
`;

export const createNewGroupAndChallenge = /* GraphQL */ `
  mutation createNewGroup(
    $inputGroup: CreateGroupInput!
    $inputChallenge: CreateChallengeInput!
  ) {
    createGroup(input: $inputGroup) {
      id
      name
    }
    createChallenge(input: $inputChallenge) {
      id
    }
  }
`;
/**
This mutation is to create new challenge group.
We have to create record of group, userGroup, challenge, groupChallenge
Input examples!
    $inputUserGroup: CreateUserGroupInput!
      example:{id: "Miki", userId: "Miki", groupId: "newGroup1"}

    $inputGroupChallenge: CreateGroupChallengeInput!
      example: {id: 2, userId: "Miki", groupId: "newGroup1", challengeId: "8"}
 */
// export const createGroupChallengeWithUserAndGroupAndChallenge = /* GraphQL */ `
//   mutation createGroupChallengeWithUserAndGroupAndChallenge(
//     $inputGroupChallenge: CreateGroupChallengeInput!
//   ) {
//     createGroupChallenge(input: $inputGroupChallenge) {
//       challengeId
//       challenge {
//         id
//         title
//         increase
//         task1Name
//         task2Name
//         task3Name
//         task4Name
//         task5Name
//         task6Name
//         task7Name
//         task8Name
//         task9Name
//         task10Name
//         task11Name
//         task12Name
//         task13Name
//         task14Name
//         task15Name
//         task16Name
//         task17Name
//         task18Name
//         task19Name
//         task20Name
//         task21Name
//         task22Name
//         task23Name
//         task24Name
//         task25Name
//         task26Name
//         task27Name
//         task28Name
//         task29Name
//         task30Name
//       }
//       groupId
//       startDate
//       isValid
//       task1IsDone
//       task2IsDone
//       task3IsDone
//       task4IsDone
//       task5IsDone
//       task6IsDone
//       task7IsDone
//       task8IsDone
//       task9IsDone
//       task10IsDone
//       task11IsDone
//       task12IsDone
//       task13IsDone
//       task14IsDone
//       task15IsDone
//       task16IsDone
//       task17IsDone
//       task18IsDone
//       task19IsDone
//       task20IsDone
//       task21IsDone
//       task22IsDone
//       task23IsDone
//       task24IsDone
//       task25IsDone
//       task26IsDone
//       task27IsDone
//       task28IsDone
//       task29IsDone
//       task30IsDone
//     }
//   }
// `;

/**
This mutation is for a user to join challenge group.
We have to create record of userGroup, challenge, groupChallenge
Input examples!
    $inputUserGroup: CreateUserGroupInput!
      example:{id: "Nel", userId: "Nel", groupId: "newGroup1"}

    $inputGroupChallenge: CreateGroupChallengeInput!
      example: {id: 2, userId: "Nel", groupId: "newGroup1", challengeId: "8"}
 */
// export const joinGroupWithUserAndGroupAndChallenge = /* GraphQL */ `
//   mutation joinGroupWithUserAndGroupAndChallenge(
//     $inputGroupChallenge: CreateGroupChallengeInput!
//   ) {
//     createGroupChallenge(input: $inputGroupChallenge) {
//       groupId
//       startDate
//       isValid
//       task1IsDone
//       task2IsDone
//       task3IsDone
//       task4IsDone
//       task5IsDone
//       task6IsDone
//       task7IsDone
//       task8IsDone
//       task9IsDone
//       task10IsDone
//       task11IsDone
//       task12IsDone
//       task13IsDone
//       task14IsDone
//       task15IsDone
//       task16IsDone
//       task17IsDone
//       task18IsDone
//       task19IsDone
//       task20IsDone
//       task21IsDone
//       task22IsDone
//       task23IsDone
//       task24IsDone
//       task25IsDone
//       task26IsDone
//       task27IsDone
//       task28IsDone
//       task29IsDone
//       task30IsDone
//     }
//   }
// `;
