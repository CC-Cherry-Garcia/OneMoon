import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Form00CreateTopFirstTime from './Form00CreateTopFirstTime';
import Form00CreateTop from './Form00CreateTop';
import Form01TitleAndDate from './Form01TitleAndDate';
import Form02ChallengeType from './Form02ChallengeType';
import Form03ChallengeQuantity from './Form03ChallengeQuantity';
import Form03ChallengeTime from './Form03ChallengeTime';
import Form03ChallengeRepeat from './Form03ChallengeRepeat';
import Form03ChallengeLibrary from './Form03ChallengeLibrary';
import Form04ChallengeConfirmation from './Form04ChallengeConfirmation';
import FormGroup01TitleAndDateAndGroup from './FormGroup01TitleAndDateAndGroup';
import FormGroup02ChallengeType from './FormGroup02ChallengeType';
import FormGroup03ChallengeQuantity from './FormGroup03ChallengeQuantity';
import FormGroup03ChallengeTime from './FormGroup03ChallengeTime';
import FormGroup03ChallengeRepeat from './FormGroup03ChallengeRepeat';
import FormGroup03ChallengeLibrary from './FormGroup03ChallengeLibrary';
import FormGroup04ChallengeConfirmation from './FormGroup04ChallengeConfirmation';
import FormGroup05SharingInformation from './FormGroup05SharingInformation';
import FormJoin01Group from './FormJoin01Group';
import FormJoin02GroupConfirmation from './FormJoin02GroupConfirmation';

const Stack = createStackNavigator();
import Colors from '../../variablesColors';

function CreateChallenge({navigation, route}) {
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
        name="ChallengeTopFirstTime"
        component={Form00CreateTopFirstTime}
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
      <Stack.Screen
        name="ChallengeTop"
        component={Form00CreateTop}
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
        initialParams={{userName: route.params.userName}}
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
        name="ChallengeTimeInfo"
        component={Form03ChallengeTime}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Task Time Info',
        }}
      />
      <Stack.Screen
        name="ChallengeRepeatInfo"
        component={Form03ChallengeRepeat}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Repeating Daily Task',
        }}
      />
      <Stack.Screen
        name="ChallengeLibrary"
        component={Form03ChallengeLibrary}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Challenge Library',
        }}
      />
      <Stack.Screen
        name="ChallengeConfirmation"
        component={Form04ChallengeConfirmation}
        initialParams={{userName: route.params.userName}}
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

      {/* Group Challenge */}
      <Stack.Screen
        name="GroupChallengeTitle"
        component={FormGroup01TitleAndDateAndGroup}
        options={{
          title: 'Group Challenge Title',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeType')}
          //     title="Type"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="GroupChallengeType"
        component={FormGroup02ChallengeType}
        options={{
          title: 'Group Challenge Type',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeTitle')}
          //     title="Title"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="GroupChallengeQuantityInfo"
        component={FormGroup03ChallengeQuantity}
        initialParams={{userName: route.params.userName}}
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
        name="GroupChallengeTimeInfo"
        component={FormGroup03ChallengeTime}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Task Time Info',
        }}
      />
      <Stack.Screen
        name="GroupChallengeRepeatInfo"
        component={FormGroup03ChallengeRepeat}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Repeating Daily Task',
        }}
      />
      <Stack.Screen
        name="GroupChallengeLibrary"
        component={FormGroup03ChallengeLibrary}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Challenge Library',
        }}
      />
      <Stack.Screen
        name="GroupChallengeConfirmation"
        component={FormGroup04ChallengeConfirmation}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Group Challenge Confirmation',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeTitle')}
          //     title="Title"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="GroupChallengeSharingInformation"
        component={FormGroup05SharingInformation}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Group Challenge Information',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeTitle')}
          //     title="Title"
          //   />
          // ),
        }}
      />

      {/* Join Group Challenge */}
      <Stack.Screen
        name="JoinGroupChallenge"
        component={FormJoin01Group}
        options={{
          title: 'Join Group Challenge',
          // headerRight: () => (
          //   <Button
          //     onPress={() => navigation.navigate('ChallengeType')}
          //     title="Type"
          //   />
          // ),
        }}
      />
      <Stack.Screen
        name="JoinGroupChallengeConfirmation"
        component={FormJoin02GroupConfirmation}
        initialParams={{userName: route.params.userName}}
        options={{
          title: 'Join Group Challenge Confirmation',
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
