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

function Form03ChallengeRepeat({navigation, route}, props) {
  const state = useStore(state => state);

  console.log('state in Form03ChallengeRepeattsx: ', state);
  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1>Set your Daily Task</H1>
        <Text>Enter a Daily Task that you will repeat for the 30 days.</Text>
        <Text style={styles.textDefault}>Challenge Title</Text>
        <Item>
          <Input
            placeholder="Squat Til You Drop"
            onChangeText={TextInputValue =>
              state.setChallengeInput({
                ...state.challengeInput,
                title: TextInputValue,
              })
            }
          />
        </Item>
        <Text style={styles.textDefault}>Daily Task:</Text>
        <TextInput
          onChangeText={TextInputValue => {
            state.setChallengeInput({
              ...state.challengeInput,
              taskName: TextInputValue,
            });
            console.log(
              'state.challengeInput.taskName :',
              state.challengeInput.taskName,
            );
          }}
          placeholder=" Do something kind for someone else"
          style={styles.textInputDefault}
        />
        <Button
          title="Review your Challege"
          onPress={() => navigation.navigate('ChallengeConfirmation')}
          style={styles.btn}>
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
  },
  textInputDefault: {
    margin: 10,
  },
  btn: {
    marginTop: 20,
  },
});

export default Form03ChallengeRepeat;
