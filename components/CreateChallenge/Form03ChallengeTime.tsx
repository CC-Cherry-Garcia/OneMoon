/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component, useEffect} from 'react';
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
  Card,
  CardItem,
  Body,
} from 'native-base';
import useStore from '../../state/state';
import Colors from '../../variablesColors';

let dailyTaskIsEmpty = true;
let dailyTimeIsEmpty = true;

function Form03ChallengeTime({navigation, route}, props) {
  const state = useStore(state => state);
  useEffect(() => {
    state.setChallengeType('time');
  }, []);

  console.log('state in Form03ChallengeTimetsx: ', state);
  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1>Set your Daily Task</H1>
        <Text style={styles.textDefault}>
          Enter your Daily Task and choose how many minutes per day you want to
          increase the task by daily.
        </Text>
        <Text style={styles.Title}>Daily Task:</Text>
        <TextInput
          onChangeText={TextInputValue => {
            state.setChallengeInput({
              ...state.challengeInput,
              taskName: TextInputValue,
            });
            if (TextInputValue.length > 0) {
              dailyTaskIsEmpty = false;
            } else {
              dailyTaskIsEmpty = true;
            }
          }}
          placeholder=" Read a Book"
          style={styles.textInputDefault}
        />
        <Text style={styles.Title}>Increase Daily Minutes by:</Text>
        <TextInput
          onChangeText={TextInputValue => {
            state.setChallengeInput({
              ...state.challengeInput,
              increase: TextInputValue,
            });
            if (TextInputValue.length > 0) {
              dailyTimeIsEmpty = false;
            } else {
              dailyTimeIsEmpty = true;
            }
          }}
          placeholder=" 10"
          style={styles.textInputDefault}
          keyboardType="numeric"
        />
        <Button
          title="Review your Challege"
          onPress={() => navigation.navigate('ChallengeConfirmation')}
          style={
            dailyTaskIsEmpty || dailyTimeIsEmpty
              ? styles.btnDisabled
              : styles.btn
          }
          disabled={dailyTaskIsEmpty || dailyTimeIsEmpty}>
          <Text>Review your Challenge</Text>
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
  textDefault: {
    marginTop: 20,
    fontSize: 18,
  },
  textInputDefault: {
    margin: 10,
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
    backgroundColor: Colors.primary,
  },
  btnDisabled: {
    marginTop: 20,
    backgroundColor: 'lightgray',
  },
});

export default Form03ChallengeTime;
