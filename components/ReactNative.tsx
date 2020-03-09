import React from 'react';
import {SafeAreaView, Text, StatusBar, Button} from 'react-native';

export default function ReactNative(props) {
  console.log('props.user :', props.user.username);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button onPress={props.signOut} title="<---------Sign out--------->" />
        <Text>Welcome, {props.user.username}!</Text>
      </SafeAreaView>
    </>
  );
}
