import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Alert} from 'react-native';
import {
  Container,
  Header,
  Content,
  H1,
  H2,
  H3,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  DatePicker,
} from 'native-base';
import {Auth} from 'aws-amplify';

function signOut() {
  console.log('signOut :');
  Auth.signOut()
    .then(data => {
      console.log('signed out: ', data);
      // setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
    })
    .catch(err => console.log(err));
}

function SettingsMain(props) {
  console.log('props in SettingsMain.tsx: ', props);
  return (
    <Container style={styles.Container}>
      <Content>
        <H1>Settings</H1>

        <Button block onPress={() => signOut()}>
          <Text>Sign out</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    marginTop: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SettingsMain;
