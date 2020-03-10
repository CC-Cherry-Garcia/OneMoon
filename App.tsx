/**
 * oneMoon React Native App
 * @format
 * @flow
 */

import React, {useReducer, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import Amplify, {Hub, Auth, API, graphqlOperation} from 'aws-amplify';
import * as queries from './src/graphql/queries';
import awsconfig from './aws-exports';

import Login from './components/Login';
import EmailLoginForm from './components/EmailLoginForm';
import UserChallengeStatus from './components/UserChallengeStatus';
import Splash from './components/Splash';
import FirstTime from './components/FirstTime';
import FirstTimeChallengeType from './components/FirstTimeChallengeType';
import FirstTimeChallengeTypeQuantity from './components/FirstTimeChallengeTypeQuantity';
import ChallengeStatus from './components/ChallengeStatus';

Amplify.configure(awsconfig);

const initialState = {
  currentView: 'SPLASH_VIEW',
  user: null,
  loading: true,
  userCurrentChallenge: {
    id: '1',
    userID: 'Travis',
    title: 'Squat til you Drop',
    startDate: '2020-03-6',
    increase: null,
    isValid: 'valid',
    task1Name: '5 Squats',
    task1IsDone: false,
    task2Name: '10 Squats',
    task2IsDone: false,
    task3Name: '15 Squats',
    task3IsDone: false,
    task4Name: '20 Squats',
    task4IsDone: false,
    task5Name: 'taskName',
    task5IsDone: false,
    task6Name: 'taskName',
    task6IsDone: false,
    task7Name: 'taskName',
    task7IsDone: false,
    task8Name: 'taskName',
    task8IsDone: false,
    task9Name: 'taskName',
    task9IsDone: false,
    task10Name: 'taskName',
    task10IsDone: false,
    task11Name: 'taskName',
    task11IsDone: false,
    task12Name: 'taskName',
    task12IsDone: false,
    task13Name: 'taskName',
    task13IsDone: false,
    task14Name: 'taskName',
    task14IsDone: false,
    task15Name: 'taskName',
    task15IsDone: false,
    task16Name: 'taskName',
    task16IsDone: false,
    task17Name: 'taskName',
    task17IsDone: false,
    task18Name: 'taskName',
    task18IsDone: false,
    task19Name: 'taskName',
    task19IsDone: false,
    task20Name: 'taskName',
    task20IsDone: false,
    task21Name: 'taskName',
    task21IsDone: false,
    task22Name: 'taskName',
    task22IsDone: false,
    task23Name: 'taskName',
    task23IsDone: false,
    task24Name: 'taskName',
    task24IsDone: false,
    task25Name: 'taskName',
    task25IsDone: false,
    task26Name: 'taskName',
    task26IsDone: false,
    task27Name: 'taskName',
    task27IsDone: false,
    task28Name: 'taskName',
    task28IsDone: false,
    task29Name: 'taskName',
    task29IsDone: false,
    task30Name: 'taskName',
    task30IsDone: false,
  },
};

const reducer = (state: any, action: {type: string}) => {
  let newState = {...state};
  switch (action.type) {
    case 'SET_LOGIN_VIEW':
      newState.currentView = 'LOGIN_VIEW';
      return newState;
    case 'SET_USER_VIEW':
      newState.currentView = 'USER_MAIN_VIEW';
      return newState;
    case 'SET_REACT_NATIVE_VIEW':
      newState.currentView = 'REACT_NATIVE_VIEW';
      return newState;
    case 'SET_CHALLENGE_STATUS':
      newState.currentView = 'CHALLENGE_STATUS';
      return newState;
    case 'SET_USER':
      return {...state, user: action.user, loading: false};
    case 'LOADED':
      return {...state, loading: false};
    case 'SET_USER_CURRENT_CHALLENGE':
      return {...state, userCurrentChallenge: action.userCurrentChallenge};
    default:
      return state;
  }
};

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, updateFormState] = useState('base');

  useEffect(() => {
    // set listener for auth events
    Hub.listen('auth', data => {
      const {payload} = data;
      if (payload.event === 'signIn') {
        setImmediate(() => dispatch({type: 'SET_USER', user: payload.data}));
        updateFormState('base');
      }
      if (payload.event === 'signOut') {
        setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
      }
    });
    checkUser(dispatch);

    // get user's current active challenge
    const getUserCurrentChallenge = async () => {
      const data = await API.graphql(
        graphqlOperation(queries.getChallenge, {id: '1'}),
      );
      const payload = data.data.getChallenge;
      dispatch({
        type: 'SET_USER_CURRENT_CHALLENGE',
        userCurrentChallenge: payload,
      });
      // console.log(data);
    };
    getUserCurrentChallenge();
  }, []);

  // function reducer(state: any, action: {type: string}) {
  //   let newState = {...state};
  //   switch (action.type) {
  //     case 'SET_LOGIN_VIEW': //Keep for now
  //       newState.currentView = 'LOGIN_VIEW';
  //       return newState;
  //     case 'SET_USER_VIEW': //Keep for now
  //       newState.currentView = 'USER_MAIN_VIEW';
  //       return newState;
  //     case 'SET_REACT_NATIVE_VIEW':
  //       newState.currentView = 'REACT_NATIVE_VIEW';
  //       return newState;
  //     case 'SET_USER':
  //       return {...state, user: action.user, loading: false};
  //     case 'LOADED':
  //       return {...state, loading: false};
  //     default:
  //       return state;
  //   }
  // }

  function setReactView() {
    dispatch({type: 'SET_REACT_NATIVE_VIEW'});
  }

  // useEffect(() => {
  //   // load app with Spalsh screen, change to login screen after 2 seconds
  //   setTimeout(() => {
  //     dispatch({type: 'SET_LOGIN_VIEW'});
  //   }, 2000);
  // }, []);

  let body = <Splash changeView={setReactView} />;
  if (state.currentView === 'USER_MAIN_VIEW') {
    body = <Login changeView={setReactView} />;
  } else if (state.currentView === 'LOGIN_VIEW') {
    body = <Login changeView={setReactView} />;
  }

  // User authentication
  async function checkUser(dispatch) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      dispatch({type: 'SET_USER', user});
    } catch (err) {
      console.log('err: ', err);
      dispatch({type: 'LOADED'});
    }
  }

  // Sign out; Don't delete
  function signOut() {
    console.log('signOut :');
    Auth.signOut()
      .then(data => {
        console.log('signed out: ', data);
        setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
      })
      .catch(err => console.log(err));
  }

  // This renders the sign-in form
  if (formState === 'email') {
    return (
      <View style={styles.appContainer}>
        <EmailLoginForm />
      </View>
    );
  }

  // let body = <ReactNative signOut={signOut} user={state.user} />;

  return (
    // <>
    //   {/* <View style={styles.scrollView}>{body}</View> */}
    //   {body}
    //   {/* <Splash /> */}
    // </>
    // <View style={styles.appContainer}>
    //   {state.loading && (
    //     <View style={styles.body}>
    //       <Text>Loading...</Text>
    //     </View>
    //   )}
    //   {!state.user && !state.loading && (
    //     <View>
    //       <View style={styles.container}>
    //         <Button
    //           title="Sign in with Facebook"
    //           onPress={() => {
    //             console.log('Auth :', Auth);
    //             Auth.federatedSignIn({provider: 'Facebook'});
    //           }}
    //         />
    //         <Button
    //           title="Sign in with Google"
    //           onPress={async () => {
    //             const result = await Auth.federatedSignIn({provider: 'Google'});
    //             console.log(
    //               'get aws Auth.federatedSignI google credentials',
    //               result,
    //             );
    //           }}
    //         />
    //         <Button
    //           title="Sign in with Email"
    //           onPress={() => updateFormState('email')}
    //         />
    //       </View>
    //     </View>
    //   )}
    //   {state.user && state.user.signInUserSession && (
    //     <View style={styles.scrollView}>{body}</View>
    //   )}
    //   {/* If you want to use Sign out, please use it :)
    //       <Button
    //         title="Sign Out"
    //         style={{...styles.button, ...styles.signOut}}
    //         onPress={signOut}>
    //         <FaSignOutAlt color="white" />
    //       </Button>
    //   */}
    // </View>
    <>
      <ChallengeStatus data={state.userCurrentChallenge} />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appContainer: {
    paddingTop: 85,
  },
});

export default App;
