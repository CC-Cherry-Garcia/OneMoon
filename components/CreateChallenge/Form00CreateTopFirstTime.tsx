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
import useStore from '../../state/state';

function Form00CreateTop({navigation}, props) {
  const state = useStore(state => state);
  const userName = props;

  return (
    <Container style={styles.Container}>
      <Content>
        <H1 style={{marginBottom: 22}}>Welcome</H1>
        <H2 style={{marginBottom: 22}}>This is where we start.</H2>
        <H3>You're only 30 days away from achieving a new goal</H3>
        <Text>
          You can create a personal individual challenge, create a group
          challenge with your friends, or join an existing group challenge.
        </Text>

        <Button
          style={styles.btn}
          block
          onPress={() => navigation.navigate('ChallengeTitle')}>
          <Text>Make an Individual Challenge</Text>
        </Button>
        <Button
          style={styles.btn}
          block
          onPress={() => navigation.navigate('ChallengeTitle')}>
          <Text>Start a Group Challenge</Text>
        </Button>
        <Button
          style={styles.btn}
          block
          onPress={() => navigation.navigate('ChallengeTitle')}>
          <Text>Join a Group Challenge</Text>
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
  btn: {
    marginTop: 20,
  },
});

export default Form00CreateTop;
