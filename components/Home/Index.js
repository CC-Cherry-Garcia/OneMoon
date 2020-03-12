import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeUser from './HomeUser';
import HomeFirstTime from './HomeFirstTime';

const Stack = createStackNavigator();
import Colors from '../../variablesColors';

function HomeScreen({navigation}) {
  //   console.log('props in HomeScreen.tsx: ', props);
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="HomeUser"
        component={HomeUser}
        options={{
          title: 'One Moon',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('HomeFirstTime')}
              title="Type"
            />
          ),
        }}
      />
      <Stack.Screen
        name="HomeFirstTime"
        component={HomeFirstTime}
        options={{
          title: 'One Moon',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeType')}
          //     title="Type"
          //   />
          // ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
