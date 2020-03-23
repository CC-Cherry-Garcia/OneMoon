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
  Icon,
} from 'native-base';
import useStore from '../../state/state';
import Colors from '../../variablesColors';

function Form00CreateTop({navigation}, props) {
  const state = useStore(state => state);

  return (
    <Container style={styles.Container}>
      <Content>
        <H1>You're only 30 days away from achieving a new goal</H1>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.Text}>
          You can create an individual challenge, group challenge with your
          friends, or join an existing group challenge.
        </Text>

        <Button
          style={styles.btn}
          block
          onPress={() => navigation.navigate('ChallengeTitle')}>
          <Icon active style={styles.Icon} name="trophy" />
          <Text style={styles.BtnText}>Make an Individual Challenge</Text>
        </Button>
        <Button
          style={styles.btn}
          block
          onPress={() => navigation.navigate('GroupChallengeTitle')}>
          <Icon active style={styles.Icon} name="people" />
          <Text style={styles.BtnText}>Start a Group Challenge</Text>
        </Button>
        <Button
          style={styles.btn}
          block
          onPress={() => navigation.navigate('JoinGroupChallenge')}>
          <Icon active style={styles.Icon} name="add" />
          <Text style={styles.BtnText}>Join a Group Challenge</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  Text: {
    marginTop: 20,
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
    backgroundColor: Colors.primary,
  },
  Icon: {
    color: '#fff',
  },
  BtnText: {
    fontSize: 18,
  },
});

export default Form00CreateTop;
