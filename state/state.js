import create from 'zustand';

const [useStore] = create(set => ({
  // CHALLENGE Form State
  challengeInput: {},
  setChallengeInput: value => set({challengeInput: value}),
  userCurrentChallenge: {},
  setUserCurrentChallenge: value => set({userCurrentChallenge: value}),
  currentChallengeId: '0',
  setCurrentChallengeId: value => set({currentChallengeId: value}),
  userHasActiveChallenge: false,
  setUserHasActiveChallenge: value => set({userHasActiveChallenge: value}),
  userFirstTime: false,
  setUserFirstTime: value => set({userFirstTime: value}),
}));

export default useStore;
