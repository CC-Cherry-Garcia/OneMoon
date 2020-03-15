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
import useStore from '../../state/state';

function signOut() {
  console.log('signOut :');
  Auth.signOut()
    .then(data => {
      console.log('signed out: ', data);
      // setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
    })
    .catch(err => console.log(err));
}

function SettingsMain({navigation, route}) {
  const state = useStore(state => state);

  console.log('state in SettingsMain.tsx: ', state);
  return (
    <Container style={styles.Container}>
      <Content>
        <H1>Hi {route.params.userName}!</H1>
        <H2 style={styles.H2}>Past Challenges:</H2>

        <Button style={styles.btn} block onPress={() => signOut()}>
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
  H2: {
    marginTop: 10,
  },
  btn: {
    marginTop: 10,
  },
});

export default SettingsMain;
