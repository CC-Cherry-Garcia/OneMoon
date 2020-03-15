import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SettingsMain from './SettingsMain';
import SettingsProfile from './SettingsProfile';

const Stack = createStackNavigator();
import Colors from '../../variablesColors';

function Settings({navigation, route}) {
  //   console.log('props in Settings.tsx: ', props);
  return (
    <Stack.Navigator
      initialRouteName="SettingsProfile"
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
        name="SettingsMain"
        component={SettingsMain}
        options={{
          title: 'One Moon',
        }}
      />
      <Stack.Screen
        name="SettingsProfile"
        component={SettingsProfile}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'One Moon',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default Settings;
