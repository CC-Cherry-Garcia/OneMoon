/* eslint-disable react-hooks/exhaustive-deps */
/**
 * oneMoon React Native App
 * @format
 * @flow
 */

import 'react-native-gesture-handler'; // Should be first import per docs
import React, {useReducer, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text, Button, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Amplify, {Hub, Auth, API, graphqlOperation} from 'aws-amplify';
import * as queries from './src/graphql/queries';
import awsconfig from './aws-exports';

import useStore from './state/state';

// Components Import
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
  isDone: false,
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

// var for navigations
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// global Colors variables
import Colors from './variablesColors';

const App: () => React$Node = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formState, setFormState] = useState('email');
  const [challengeInput, setChallengeInput] = useState({});
  const [currentChallengeId, setCurrentChallengeId] = useState({});
  const [userCurrentChallenge, setUserCurrentChallenge] = useState({});
  const [isDone, setIsDone] = useState(false);
  const [isSplashLoading, setIsSplashLoading] = useState(true);

  const stateA = useStore(state => state);

  useEffect(() => {
    // set listener for user authentication events
    Hub.listen('auth', data => {
      const {payload} = data;
      console.log('payload :', payload);
      if (payload.event === 'signIn') {
        setImmediate(() => dispatch({type: 'SET_USER', user: payload.data}));

        setFormState('base');
      }
      if (payload.event === 'signOut') {
        setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
      }
    });
    checkUser(dispatch);

    // get user's current active challenge
    const getUserCurrentChallenge = async () => {
      const data = await API.graphql(
        graphqlOperation(queries.getChallenge, {id: 'Asdf'}),
      );
      const payload = data.data.getChallenge;
      stateA.setUserCurrentChallenge(payload);
      stateA.setUserHasActiveChallenge(true);
      // console.log(data);
    };
    getUserCurrentChallenge();
  }, []);

  useEffect(() => {
    // load app with Spalsh screen, change to login or home screen after 2 seconds
    setTimeout(() => {
      setIsSplashLoading(false);
    }, 2000);
  }, []);

  // mark task complete
  const markComplete = () => {
    setIsDone(true);
    console.log('markComplete', isDone);
    return;
  };

  // User authentication
  async function checkUser(dispatch) {
    try {
      const user = await Auth.currentAuthenticatedUser();
      dispatch({type: 'SET_USER', user});
      setFormState('loggedIn');
      // setFormState('base')
    } catch (err) {
      console.log('err: ', err);
      dispatch({type: 'LOADED'});
    }
  }

  // This renders the sign-in form
  if (formState === 'email') {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SearchMain"
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
              borderBottomWidth: 0,
              shadowColor: 'transparent',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="SearchMain"
            component={EmailLoginForm}
            options={{
              title: 'One Moon',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <>
      {state.loading && <Splash />}
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
                name="Home"
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
                  name="Home"
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
                  name="Home"
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
                  <Icon name="ios-person" color={Colors.primary} size={24} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
