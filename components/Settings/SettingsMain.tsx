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

function SettingsMain(props) {
  const state = useStore(state => state);
  function signOut() {
    state.setUserActiveChallengesList([]);
    state.setUserInactiveChallengesList([]);
    Auth.signOut()
      .then(data => {
        // setTimeout(() => dispatch({type: 'SET_USER', user: null}), 350);
      })
      .catch(err => console.log(err));
  }

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
