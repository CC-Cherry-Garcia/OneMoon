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

function Form03ChallengeQuantity({navigation, route}, props) {
  const state = useStore(state => state);
  useEffect(() => {
    state.setChallengeType('quantity');
  }, []);

  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1>Set your Daily Task</H1>
        <Text style={styles.textDefault}>
          Enter your Daily Task and how much you want the quantity to increase
          by daily.
        </Text>
        <Text style={styles.Title}>Daily Task:</Text>
        <TextInput
          onChangeText={TextInputValue =>
            state.setChallengeInput({
              ...state.challengeInput,
              taskName: TextInputValue,
            })
          }
          placeholder=" Squats"
          style={styles.textInputDefault}
        />
        <Text style={styles.Title}>Increase Daily Quantity by:</Text>
        <TextInput
          onChangeText={TextInputValue =>
            state.setChallengeInput({
              ...state.challengeInput,
              increase: TextInputValue,
            })
          }
          placeholder=" 5"
          style={styles.textDefault}
          keyboardType="numeric"
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
});

export default Form03ChallengeQuantity;
