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
  Icon,
  Body,
  Right,
} from 'native-base';
import {Auth} from 'aws-amplify';
import useStore from '../../state/state';
import Colors from '../../variablesColors';

function SettingsMain({navigation, route}) {
  const state = useStore(state => state);
  // console.log('state in SettingsMain.tsx: ', state);
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
    <Container style={styles.container}>
      <Content>
        <H1>
          {route.params.userName.charAt(0).toUpperCase() +
            route.params.userName.substring(1).toLowerCase()}
          , you can view past challenges and sign out here.
        </H1>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
        />
        <H3 style={styles.H3}>Past Challenges:</H3>
        {state.userInactiveChallengesList.map(item => (
          <ListItem
            key={item.id}
            style={{
              backgroundColor: 'rgba(24, 61, 95, 0.03)',
            }}
            onPress={() => {
              state.setUserCurrentChallenge(item);
              navigation.navigate('Home', {
                screen: 'ChallengeStatusMain',
              });
            }}>
            {(item.groupId !== undefined && (
              <Icon active style={styles.people} name="people" />
            )) || <Icon active style={styles.people} name="trophy" />}

            <Body>
              <Text style={styles.Text}>
                <Text style={styles.Text}>
                  {item.challenge.title}
                  {'\n'}
                  <Text style={styles.startDate}>
                    Started: {new Date(item.startDate).getFullYear()}/
                    {new Date(item.startDate).getMonth() + 1}/
                    {new Date(item.startDate).getDate()}
                  </Text>
                </Text>
              </Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  H3: {
    marginTop: 20,
  },
  H1: {
    margin: 20,
  },
  Text: {
    fontSize: 18,
  },

  startDate: {
    color: 'gray',
  },

  checkmark: {
    color: 'green',
    // marginLeft: 200,
  },

  people: {
    color: 'rgba(24, 61, 95, 1)',
    // marginLeft: 10,
    // marginLeft: 200,
  },
  btn: {
    marginTop: 20,
    backgroundColor: Colors.primary,
  },
});

export default SettingsMain;
