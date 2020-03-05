import React from 'react';
import {Text, Button, View} from 'react-native';

export default function Log(props) {
  return (
    <View>
      <Button onPress={props.backToLogin} title="backToLogin" />;
    </View>
  );
}
