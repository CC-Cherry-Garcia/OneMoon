import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Form01TitleAndDate from './Form01TitleAndDate';
import Form02ChallengeType from './Form02ChallengeType';

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
        component={Form01TitleAndDate}
        options={{
          title: 'Challenge Title',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('ChallengeType')}
              title="Type"
            />
          ),
        }}
      />
      <Stack.Screen
        name="ChallengeType"
        component={Form02ChallengeType}
        options={{
          title: 'Challenge Type',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('ChallengeTitle')}
              title="Title"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default CreateChallenge;
