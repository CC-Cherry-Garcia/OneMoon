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
} from 'native-base';
import useStore from '../../state/state';
import Colors from '../../variablesColors';

function Form01TitleAndDate({navigation}, props) {
  const state = useStore(state => state);

  // create placeholder for datepicker to show today on load
  const datePlaceholder = `${new Date().getFullYear()}/${new Date().getMonth() +
    1}/${new Date().getDate()}`;

  // we have to pass today into state on load for datepicker to display correctly
  const today = new Date();
  useEffect(() => {
    state.setChallengeInput({
      ...state.challengeInput,
      startDate: today.toString(),
    });
  }, []);

  return (
    <Container style={styles.Container}>
      <Content>
        <H1>Create your Challenge!</H1>
        <Text style={styles.TextIntro}>
          First, select a title and pick your start date.
        </Text>
        <Form>
          <Label style={styles.Title}>Challenge Title:</Label>
          <Item>
            <Input
              placeholder="Squat Til You Drop"
              onChangeText={TextInputValue =>
                state.setChallengeInput({
                  ...state.challengeInput,
                  title: TextInputValue,
                })
              }
              style={styles.Text}
            />
          </Item>
          <Label style={styles.Title}>Start Date:</Label>
          <Item fixedLabel last>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2020, 0, 1)}
              maximumDate={new Date(2030, 12, 31)}
              locale={'en'}
              mode="datetime"
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText={datePlaceholder}
              textStyle={{color: '#0a3d62'}}
              placeHolderTextStyle={{fontSize: 18}}
              onDateChange={value =>
                state.setChallengeInput({
                  ...state.challengeInput,
                  startDate: value.toString(),
                })
              }
              disabled={false}
            />
          </Item>
          <Button
            style={styles.btn}
            block
            onPress={() => navigation.navigate('ChallengeType')}>
            <Text>Next Step</Text>
          </Button>
        </Form>
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
  TextIntro: {
    fontSize: 18,
    marginTop: 20,
  },
  Text: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
    backgroundColor: Colors.primary,
  },
});

export default Form01TitleAndDate;
