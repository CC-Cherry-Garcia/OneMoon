/* eslint-disable react-hooks/exhaustive-deps */
/**
 * oneMoon React Native App
 * @format
 * @flow
 */

import 'react-native-gesture-handler'; // Should be first import per docs
import React, {useReducer, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Amplify, {Hub, Auth, API, graphqlOperation} from 'aws-amplify';
import * as queries from './src/graphql/queries';
import awsconfig from './aws-exports';
import useStore from './state/state';
import EmailLoginForm from './components/EmailLoginForm';
import Splash from './components/Splash';
import CreateChallenge from './components/CreateChallenge/Index';
import Settings from './components/Settings/Index';
import Home from './components/Home/Index';
import HomeFirstTime from './components/Home/HomeFirstTime';
import Search from './components/Search/Index';
import ChallengeStatus from './components/ChallengeStatus/Index';

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
    case 'SET_FIRST_VIEW':
      newState.currentView = 'FIRST_TIME';
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
    case 'SET_CHALLENGE_STATUS_VIEW':
      newState.currentView = 'CHALLENGE_STATUS_VIEW';
      return newState;
    case 'SET_USER':
      return {...state, user: action.user, loading: false};
    case 'LOADED':
      return {...state, loading: false};
    // case 'SET_USER_CURRENT_CHALLENGE':
    //   return {...state, userCurrentChallenge: action.userCurrentChallenge};
    default:
      return state;
  }
};

const Tab = createBottomTabNavigator();
import Colors from './variablesColors';

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, setFormState] = useState('email');
  const [isSplashLoading, setIsSplashLoading] = useState(true);

  const stateA = useStore(state => state);

  useEffect(() => {
    // set listener for auth events
    Hub.listen('auth', data => {
      const {payload} = data;
      // console.log('payload :', payload);
      if (payload.event === 'signIn') {
        setImmediate(() => dispatch({type: 'SET_USER', user: payload.data}));

        setFormState('base');
      }
      if (payload.event === 'signOut') {
        setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
      }
    });
    checkUser(dispatch);

    setTimeout(() => {
      setIsSplashLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if(!state.user) return;

    API.graphql(
      graphqlOperation(queries.searchChallengeByUser, {userID: state.user.username}),
    ).then((data) => {
      const payload = data.data.listChallenges.items;
      if (payload.length !== 0) {
        stateA.setUserCurrentChallenge(payload[0]);
        stateA.setUserHasActiveChallenge(true);
      }
    }).catch((error) => {
      console.log(error);
    });
  }, [state.user])

  console.log("stateA updated", stateA.userHasActiveChallenge ? "1" : "0");

  // User authentication
  async function checkUser(dispatch) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      dispatch({type: 'SET_USER', user});
      setFormState('loggedIn');
      // setFormState('base')
    } catch (err) {
      dispatch({type: 'LOADED'});
    }
  }

  // This renders the sign-in form
  if (formState === 'email') {
    return (
      <View style={styles.appContainer}>
        <EmailLoginForm />
      </View>
    );
  }
  return (
    <>
      {state.loading && <Splash />}
      {!state.user && !state.loading && (
        <View style={styles.appContainer}>
          <EmailLoginForm />
        </View>
      )}
      {state.user && state.user.signInUserSession && isSplashLoading && (
        <Splash />
      )}
      {state.user && state.user.signInUserSession && !isSplashLoading && (
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: Colors.primary,
              inactiveTintColor: 'gray',
            }}>
            {(stateA.userFirstTime && (
              <Tab.Screen
                name="Home1"
                component={HomeFirstTime}
                initialParams={{userName: state.user.username}}
                options={{
                  tabBarIcon: () => (
                    <Icon name="ios-trophy" color={Colors.primary} size={24} />
                  ),
                }}
              />
            )) ||
              (stateA.userHasActiveChallenge && (
                <Tab.Screen
                  name="Home2"
                  component={ChallengeStatus}
                  initialParams={{userName: state.user.username}}
                  options={{
                    tabBarIcon: () => (
                      <Icon
                        name="ios-trophy"
                        color={Colors.primary}
                        size={24}
                      />
                    ),
                  }}
                />
              )) || (
                <Tab.Screen
                  name="Home3"
                  component={Home} // this is an Active user w/o an Active Challenge view
                  initialParams={{userName: state.user.username}}
                  options={{
                    tabBarIcon: () => (
                      <Icon
                        name="ios-trophy"
                        color={Colors.primary}
                        size={24}
                      />
                    ),
                  }}
                />
              )}
            <Tab.Screen
              name="Create"
              component={CreateChallenge}
              initialParams={{userName: state.user.username}}
              options={{
                tabBarIcon: () => (
                  <Icon name="ios-create" color={Colors.primary} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              initialParams={{userName: state.user.username}}
              options={{
                tabBarIcon: () => (
                  <Icon name="ios-search" color={Colors.primary} size={24} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              initialParams={{userName: state.user.username}}
              options={{
                tabBarIcon: () => (
                  <Icon name="ios-settings" color={Colors.primary} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
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
