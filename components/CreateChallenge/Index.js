import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Form01TitleAndDate from './Form01TitleAndDate';
import Form02ChallengeType from './Form02ChallengeType';
import Form03ChallengeQuantity from './Form03ChallengeQuantity';
import Form04ChallengeConfirmation from './Form04ChallengeConfirmation';

const Stack = createStackNavigator();
import Colors from '../../variablesColors';

function CreateChallenge({navigation}) {
  //   console.log('props in CreateChallenge.tsx: ', props);
  return (
    <Stack.Navigator
      initialRouteName="ChallengeTitle"
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
        name="ChallengeTitle"
        component={Form01TitleAndDate}
        options={{
          title: 'Challenge Title',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeType')}
          //     title="Type"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="ChallengeType"
        component={Form02ChallengeType}
        options={{
          title: 'Challenge Type',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeTitle')}
          //     title="Title"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="ChallengeQuantityInfo"
        component={Form03ChallengeQuantity}
        options={{
          title: 'Task Quantity Info',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeTitle')}
          //     title="Title"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="ChallengeConfirmation"
        component={Form04ChallengeConfirmation}
        options={{
          title: 'Challenge Confirmation',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeTitle')}
          //     title="Title"
          //   />
          // ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default CreateChallenge;
