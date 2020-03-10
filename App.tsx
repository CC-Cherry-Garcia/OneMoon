/**
 * oneMoon React Native App
 * @format
 * @flow
 */

import React, {useReducer, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import Amplify, {Hub, Auth} from 'aws-amplify';
import awsconfig from './aws-exports';

import Login from './components/Login';
import EmailLoginForm from './components/EmailLoginForm';
import UserChallengeStatus from './components/UserChallengeStatus';
import Splash from './components/Splash';
import FirstTime from './components/FirstTime';
import FirstTimeChallengeType from './components/FirstTimeChallengeType';
import FirstTimeChallengeTypeQuantity from './components/FirstTimeChallengeTypeQuantity';
import FirstTimeChallengeTypeQuantityConfirm from './components/FirstTimeChallengeTypeQuantityConfirm';

Amplify.configure(awsconfig);

const initialState = {
  currentView: 'SPLASH_VIEW',
  user: null,
  loading: true,
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
    case 'SET_FIRST_TIME_CHALLENGE_TYPE_VIEW':
      newState.currentView = 'FIRST_TIME_CHALLENGE_TYPE_VIEW';
      return newState;
    case 'SET_FIRST_TIME_CHALLENGE_TYPE_VIEW':
      newState.currentView = 'FIRST_TIME_CHALLENGE_TYPE_VIEW';
      return newState;
    case 'SET_FIRST_TIME_CHALLENGE_TYPE_QUANTITY_VIEW':
      newState.currentView = 'FIRST_TIME_CHALLENGE_TYPE_QUANTITY_VIEW';
      return newState;
    case 'SET_FIRST_TIME_CHALLENGE_TYPE_QUANTITY_CONFIRM_VIEW':
      newState.currentView = 'FIRST_TIME_CHALLENGE_TYPE_QUANTITY_CONFIRM_VIEW';
      return newState;
    case 'SET_USER':
      return {...state, user: action.user, loading: false};
    case 'LOADED':
      return {...state, loading: false};
    default:
      return state;
  }
};

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, updateFormState] = useState('base');
  const [challengeInput, setChallengeInput] = useState({});

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

  function setFirstTimeChallengeTypeView() {
    dispatch({type: 'SET_FIRST_TIME_CHALLENGE_TYPE_VIEW'});
  }

  function setFirstTimeChallengeTypeQuantityView() {
    dispatch({type: 'SET_FIRST_TIME_CHALLENGE_TYPE_QUANTITY_VIEW'});
  }

  function setFirstTimeChallengeTypeQuantityConfirmView() {
    dispatch({type: 'SET_FIRST_TIME_CHALLENGE_TYPE_QUANTITY_CONFIRM_VIEW'});
  }

  // useEffect(() => {
  //   // load app with Spalsh screen, change to login screen after 2 seconds
  //   setTimeout(() => {
  //     dispatch({type: 'SET_LOGIN_VIEW'});
  //   }, 2000);
  // }, []);

  // let body = <Splash changeView={setReactView} />;
  let body = <FirstTime 
              state={state} 
              challengeInput={challengeInput}
              setChallengeInput={setChallengeInput}
              changeView={setFirstTimeChallengeTypeView}/>;
  console.log('currentView: ', state.currentView);
  if (state.currentView === 'USER_MAIN_VIEW') {
    body = <Login changeView={setReactView} />;
  } else if (state.currentView === 'LOGIN_VIEW') {
    body = <Login changeView={setReactView} />;
  } else if (state.currentView === 'FIRST_TIME_CHALLENGE_TYPE_VIEW') {
    console.log('challengeInput: ', challengeInput);
    body = <FirstTimeChallengeType 
            state={state}
            changeView={setFirstTimeChallengeTypeQuantityView}/>;
  } else if (state.currentView === 'FIRST_TIME_CHALLENGE_TYPE_QUANTITY_VIEW') {
    body = <FirstTimeChallengeTypeQuantity 
            state={state}
            challengeInput={challengeInput}
            setChallengeInput={setChallengeInput}
            changeView={setFirstTimeChallengeTypeQuantityConfirmView}/>;
  } else if (state.currentView === 'FIRST_TIME_CHALLENGE_TYPE_QUANTITY_CONFIRM_VIEW') {
    body = <FirstTimeChallengeTypeQuantityConfirm 
            state={state}
            challengeInput={challengeInput}
            changeView={setFirstTimeChallengeTypeQuantityConfirmView}/>;
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
    <View style={styles.appContainer}>
      {state.loading && (
        <View style={styles.body}>
          <Text>Loading...</Text>
        </View>
      )}
      {!state.user && !state.loading && (
        <View>
          <View style={styles.container}>
            <Button
              title="Sign in with Facebook"
              onPress={() => {
                console.log('Auth :', Auth);
                Auth.federatedSignIn({provider: 'Facebook'});
              }}
            />
            <Button
              title="Sign in with Google"
              onPress={async () => {
                const result = await Auth.federatedSignIn({provider: 'Google'});
                console.log(
                  'get aws Auth.federatedSignI google credentials',
                  result,
                );
              }}
            />
            <Button
              title="Sign in with Email"
              onPress={() => updateFormState('email')}
            />
          </View>
        </View>
      )}
      {state.user && state.user.signInUserSession && (
        <View style={styles.scrollView}>{body}</View>
      )}
      {/* If you want to use Sign out, please use it :)
          <Button
            title="Sign Out"
            style={{...styles.button, ...styles.signOut}}
            onPress={signOut}>
            <FaSignOutAlt color="white" />
          </Button>
      */}
    </View>
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
