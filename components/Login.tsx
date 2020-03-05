import React from 'react';
import {Text, Button, View, Alert} from 'react-native';

export default function Log(props) {
  return (
    <View>
      <Text>Login Page</Text>
      <Button onPress={props.createNewTodo} title="Login" />
      <Button
        // disabled
        onPress={() => Alert.alert('Not ready yet.')}
        title="Sign up"
      />
    </View>
  );
}
