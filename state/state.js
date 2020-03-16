import create from 'zustand';

const [useStore] = create(set => ({
  // CHALLENGE Form State
  challengeInput: {},
  setChallengeInput: value => set({challengeInput: value}),
  challengeType: '',
  setChallengeType: value => set({challengeType: value}),

  // USER State
  userCurrentChallenge: {},
  setUserCurrentChallenge: value => set({userCurrentChallenge: value}),
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
