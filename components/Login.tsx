import React from 'react';
import {Text, Button, View, Alert} from 'react-native';

export default function Log(props) {
  return (
    <View>
      <Button onPress={props.changeView} title="Default React Native View" />
      <Button onPress={() => Alert.alert('Not ready yet.')} title="Sign up" />
      <Button disabled title="Sign up with Twitter" />
    </View>
  );
}
