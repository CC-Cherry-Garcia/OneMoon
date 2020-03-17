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
import Icon from 'react-native-vector-icons/Ionicons';
import Amplify, {Hub, Auth, API, graphqlOperation} from 'aws-amplify';
import * as customQueries from './src/graphql/customQueries';

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
import HomeUserActiveChallenge from './components/Home/HomeUserActiveChallenge';
import ChallengeTop from './components/CreateChallenge/Form00CreateTop';

Amplify.configure(awsconfig);

const initialState = {
  user: null,
  loading: true,
};

const reducer = (state: any, action: {type: string}) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, user: action.user, loading: false};
    case 'LOADED':
      return {...state, loading: false};
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
  const [isDone, setIsDone] = useState(false);

  const stateA = useStore(state => state);

  useEffect(() => {
    // set listener for user authentication events
    Hub.listen('auth', data => {
      const {payload} = data;
      // console.log('payload :', payload);
      if (payload.event === 'signIn') {
        setImmediate(() => dispatch({type: 'SET_USER', user: payload.data}));

        setFormState('base');
      }
      if (payload.event === 'signOut') {
        setFormState('email');
        setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
      }
    });
    checkUser(dispatch);

    setTimeout(() => {
      stateA.setIsSplashLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!state.user) {
      return;
    }

    API.graphql(
      graphqlOperation(customQueries.searchChallengeByUser, {
        userID: state.user.username,
      }),
    )
      .then(data => {
        const payload = data.data.listChallenges.items;
        if (payload.length !== 0) {
          ///////////////////////////////////////
          ///// KOTA PLEASE FIX THESE!
          ///////////////////////////////////////
          ///////////////////////////////////////
          ///////////////////////////////////////
          ///////////////////////////////////////
          ///////////////////////////////////////
          ///////////////////////////////////////
          ///////////////////////////////////////

          stateA.setUserActiveChallengesList(payload);
          stateA.setUserInactiveChallengesList(payload);
          console.log('payload: *****#*#*#*#* ', payload);
          // stateA.setUserCurrentChallenge(payload[0]);
          stateA.setUserHasActiveChallenge(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [state.user]);

  useEffect(() => {
    if (isEmpty(stateA.userCurrentChallenge)) return;
    console.log(
      '*****@*@*@*@**@*@* stateA.userCurrentChallenge: ',
      stateA.userCurrentChallenge,
    );
    const today = new Date();
    const monthOfToday = today.getMonth() + 1;
    const dateOfToday = today.getDate();
    for (let [key, value] of Object.entries(stateA.userCurrentChallenge)) {
      if (key.slice(0, 4) === 'task' && key.slice(-4) === 'Date') {
        const targetDate = new Date(value);
        if (
          monthOfToday === targetDate.getMonth() + 1 &&
          dateOfToday === targetDate.getDate()
        ) {
          const currentDateStr = key.substring(
            key.indexOf('k') + 1,
            key.indexOf('D'),
          );
          stateA.setCurrentChallengeTodayDate(currentDateStr);
          stateA.setCurrentChallengeTodayTaskName(
            stateA.userCurrentChallenge[`task${currentDateStr}Name`],
          );
          stateA.setCurrentChallengeTodayTaskIsDone(
            stateA.userCurrentChallenge[`task${currentDateStr}IsDone`],
          );
          break;
        }
      }
    }
  }, [stateA.userCurrentChallenge]);

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

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
  // console.log('app state', state);
  // console.log('app stateA', stateA);
  return (
    <>
      {state.loading && <Splash />}
      {state.user && state.user.signInUserSession && stateA.isSplashLoading && (
        <Splash />
      )}
      {state.user && state.user.signInUserSession && !stateA.isSplashLoading && (
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: Colors.primary,
              inactiveTintColor: 'gray',
            }}>
            {(stateA.userFirstTime && (
              <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{
                  userName: state.user.username,
                  screen: 'HomeFirstTime',
                }}
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
                  component={Home}
                  initialParams={{
                    userName: state.user.username,
                    screen: 'HomeUserActiveChallenge',
                  }}
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
                  component={CreateChallenge} // this is an Active user w/o an Active Challenge view
                  initialParams={{
                    userName: state.user.username,
                    screen: 'ChallengeTopFirstTime',
                  }}
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
              initialParams={{
                userName: state.user.username,
                screen: 'ChallengeTop',
              }}
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
