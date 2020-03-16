/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component, useEffect} from 'react';
import {StyleSheet, View, TextInput, Alert, Linking} from 'react-native';
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
  List,
  ListItem,
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
  // console.log('state in SettingsMain.tsx: ', state);

  return (
    <Container style={styles.Container}>
      <Content>
        <H1>
          {route.params.userName}, you can view past challenges and sign out
          here.
        </H1>
        <H2 style={styles.H2}>Past Challenges:</H2>
        {state.userInactiveChallengesList.map(item => (
          <ListItem>
            <Text
              onPress={() => {
                state.setUserCurrentChallenge(
                  state.userActiveChallengesList.find(x => x.id === item.title),
                );
                navigation.navigate('Home', {
                  screen: 'ChallengeStatusMain',
                });
              }}>
              {item.title}
            </Text>
          </ListItem>
        ))}

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
    marginTop: 20,
  },
  btn: {
    marginTop: 10,
  },
});

export default SettingsMain;
