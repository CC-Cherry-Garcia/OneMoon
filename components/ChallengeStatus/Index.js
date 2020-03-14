import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengeStatusMain from './ChallengeStatusMain';

const Stack = createStackNavigator();

function CreateChallenge({navigation}) {
  //   console.log('props in CreateChallenge.tsx: ', props);
  return (
    <Stack.Navigator
      initialRouteName="ChallengeTitle"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0a3d62',
          borderBottomWidth: 0,
          shadowColor: 'transparent',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ChallengeTitle"
        component={ChallengeStatusMain}
        options={{
          title: 'Challenge Status',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default CreateChallenge;
