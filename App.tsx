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
import ReactNative from './components/ReactNative';
import Splash from './components/Splash';
import FirstTime from './components/FirstTime';
import FirstTimeChallengeType from './components/FirstTimeChallengeType';
import FirstTimeChallengeTypeQuantity from './components/FirstTimeChallengeTypeQuantity';

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
  }, []);

  function reducer(state: any, action: {type: string}) {
    let newState = {...state};
    switch (action.type) {
      case 'SET_LOGIN_VIEW': //Keep for now
        newState.currentView = 'LOGIN_VIEW';
        return newState;
      case 'SET_USER_VIEW': //Keep for now
        newState.currentView = 'USER_MAIN_VIEW';
        return newState;
      case 'SET_REACT_NATIVE_VIEW':
        newState.currentView = 'REACT_NATIVE_VIEW';
        return newState;
      case 'SET_USER':
        return {...state, user: action.user, loading: false};
      case 'LOADED':
        return {...state, loading: false};
      default:
        return state;
    }
  }

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
  } else if (state.currentView === 'REACT_NATIVE_VIEW') {
    body = <ReactNative changeView={setUserView} />;
  }
  async function checkUser(dispatch) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      dispatch({type: 'SET_USER', user});
    } catch (err) {
      console.log('err: ', err);
      dispatch({type: 'LOADED'});
    }
  }

  //Keep for now
  function signOut() {
    console.log('signOut :');
    Auth.signOut()
      .then(data => {
        console.log('signed out: ', data);
        setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
      })
      .catch(err => console.log(err));
  }

  // This renders the custom form
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
