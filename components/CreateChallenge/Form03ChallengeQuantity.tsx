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
  Card,
  CardItem,
  Body,
} from 'native-base';
import useStore from '../../state/state';

function Form03ChallengeQuantity({navigation, route}, props) {
  // const testCount = useStore(state => state.count);
  const state = useStore(state => state);

  console.log('state in Form03ChallengeQuantitytsx: ', state);
  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1>Choose your Challenge Type</H1>
        <Text>Intro text</Text>
        <Text style={styles.dailyTask}>Daily Task:</Text>
        <TextInput
          onChangeText={TextInputValue =>
            state.setChallengeInput({
              ...state.challengeInput,
              taskName: TextInputValue,
            })
          }
          placeholder=" Squats"
        />
        <Text style={styles.dailyTask2}>Increase Quantity by:</Text>
        <TextInput
          onChangeText={TextInputValue =>
            state.setChallengeInput({
              ...state.challengeInput,
              increase: TextInputValue,
            })
          }
          placeholder=" 5"
        />
        <Button
          title="Review your Challege"
          onPress={() => navigation.navigate('ChallengeConfirmation')}
        />
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

export default Form03ChallengeQuantity;
