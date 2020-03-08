/**
 * oneMoon React Native App
 * @format
 * @flow
 */

import React from 'react';
import {useReducer} from 'react';
import {StyleSheet, View} from 'react-native';

import Login from './components/Login';
import ReactNative from './components/ReactNative';
import Splash from './components/Splash';
import FirstTime from './components/FirstTime';

const initialState = {
  currentView: 'LOGIN_VIEW',
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

  function setUserView() {
    console.log('setUserView pressed ---------->');
    dispatch({type: 'SET_USER_VIEW'});
  }
  function setReactView() {
    console.log('setReactView pressed ---------->');
    dispatch({type: 'SET_REACT_NATIVE_VIEW'});
  }

  let body = <Login changeView={setReactView} />;
  if (state.currentView === 'USER_MAIN_VIEW') {
    body = <Login changeView={setReactView} />;
  } else if (state.currentView === 'LOGIN_VIEW') {
    body = <Login changeView={setReactView} />;
  } else if (state.currentView === 'REACT_NATIVE_VIEW') {
    body = <ReactNative changeView={setUserView} />;
  }

  return (
    <>
      {/* <View style={styles.scrollView}>{body}</View> */}
      <FirstTime />
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
});

export default App;
