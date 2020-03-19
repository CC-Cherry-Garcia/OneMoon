import create from 'zustand';

const [useStore] = create(set => ({
  // CHALLENGE Form State
  challengeInput: {},
  setChallengeInput: value => set({challengeInput: value}),
  challengeType: '',
  setChallengeType: value => set({challengeType: value}),
  currentChallengeTodayDate: '',
  setCurrentChallengeTodayDate: value =>
    set({currentChallengeTodayDate: value}),
  currentChallengeTodayTaskName: '',
  setCurrentChallengeTodayTaskName: value =>
    set({currentChallengeTodayTaskName: value}),
  currentChallengeTodayTaskIsDone: false,
  setCurrentChallengeTodayTaskIsDone: value =>
    set({currentChallengeTodayTaskIsDone: value}),
  groupChallengeInformation: {},
  setGroupChallengeInformation: value =>
    set({groupChallengeInformation: value}),
  currentChallengeCompletedDatesList: [],
  setCurrentChallengeCompletedDatesList: value =>
    set({currentChallengeCompletedDatesList: value}),
  currentChallengeProgress: 0,
  setCurrentChallengeProgress: value => set({currentChallengeProgress: value}),

  // USER State
  userCurrentChallenge: {},
  setUserCurrentChallenge: value => set({userCurrentChallenge: value}),
  userActiveChallengesList: [],
  setUserActiveChallengesList: value => set({userActiveChallengesList: value}),
  userInactiveChallengesList: [],
  setUserInactiveChallengesList: value =>
    set({userInactiveChallengesList: value}),
  userHasActiveChallenge: false,
  setUserHasActiveChallenge: value => set({userHasActiveChallenge: value}),
  userFirstTime: false,
  setUserFirstTime: value => set({userFirstTime: value}),

  // LOADING State
  isSplashLoading: true,
  setIsSplashLoading: value => set({isSplashLoading: value}),
  isLoading: true,
  setIsLoading: value => set({isLoading: value}),

  // DAILY TASK State
  isDone: false,
  setIsDone: value => set({isDone: value}),
}));

export default useStore;
