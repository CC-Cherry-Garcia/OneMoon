/**
 * oneMoon React Native App
 * @format
 * @flow
 */

import React from 'react';
import {useReducer, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Amplify, {Hub, Auth} from 'aws-amplify';
// import {FaSignOutAlt} from 'react-native-vector-icons';
import EmailLoginForm from './components/EmailLoginForm';
import awsconfig from './aws-exports';
import ReactNative from './components/ReactNative';
Amplify.configure(awsconfig);

const initialState = {
  currentView: 'LOGIN_VIEW',
  user: null,
  loading: true,
};

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, updateFormState] = useState('base');

  useEffect(() => {
    // set listener for auth events
    Hub.listen('auth', data => {
      const {payload} = data;
      if (payload.event === 'signIn') {
        setImmediate(() => dispatch({type: 'setUser', user: payload.data}));
        setImmediate(() =>
          window.history.pushState({}, null, 'https://www.amplifyauth.dev/'),
        );
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

  async function checkUser(dispatch) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user :', Object.keys(user));
      dispatch({type: 'SET_USER', user});
    } catch (err) {
      console.log('err: ', err);
      dispatch({type: 'LOADED'});
    }
  }

  //Keep for now
  function signOut() {
    Auth.signOut()
      .then(data => {
        console.log('signed out: ', data);
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

  // let body = <Login changeView={setReactView} />;
  // if (state.currentView === 'USER_MAIN_VIEW') {
  //   body = <Login changeView={setReactView} />;
  // } else if (state.currentView === 'LOGIN_VIEW') {
  //   body = <Login changeView={setReactView} />;
  // } else if (state.currentView === 'REACT_NATIVE_VIEW') {
  //   body = <ReactNative changeView={setUserView} />;
  // }
  let body = <ReactNative changeView={setReactView} />;

  return (
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
                Auth.federatedSignIn({provider: 'Facebook'});
              }}
            />
            <Button
              title="Sign in with Google"
              onPress={() => Auth.federatedSignIn({provider: 'Google'})}
            />
            <Button
              title="Sign in with Hosted UI"
              onPress={() => Auth.federatedSignIn()}
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
