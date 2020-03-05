/**
 * oneMoon React Native App
 * @format
 * @flow
 */

import React from 'react';
import {useReducer} from 'react';
import ReactNative from './components/ReactNative';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Login from './components/Login';
import LoggedIn from './components/LoggedIn';

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
    default:
      return state;
  }
};

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setUserView() {
    console.log('pressed');
    dispatch({type: 'SET_USER_VIEW'});
  }
  function setLoginView() {
    console.log('pressed');
    dispatch({type: 'SET_LOGIN_VIEW'});
  }

  let body = <Login createNewTodo={setUserView} />;
  if (state.currentView === 'USER_MAIN_VIEW') {
    body = <LoggedIn />;
  } else if (state.currentView === 'LOGIN_VIEW') {
    let body = <Login />;
  }

  return <>{body}</>;
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default App;
