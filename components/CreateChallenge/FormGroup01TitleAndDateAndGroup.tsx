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
let titleInputEmpty = true;
let groupNameInputEmpty = true;

function FormGroup01TitleAndDateAndGroup({navigation}, props) {
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
        <H1>Create your Group Challenge!</H1>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.TextIntro}>
          First, select a challenge title, group name and pick your start date.
        </Text>
        <Form>
          <Label style={styles.Title}>Challenge Title:</Label>
          <Item>
            <Input
              placeholder="Squat Til You Drop"
              style={styles.Text}
              onChangeText={TextInputValue => {
                state.setChallengeInput({
                  ...state.challengeInput,
                  title: TextInputValue,
                });
                if (TextInputValue.length > 0) {
                  titleInputEmpty = false;
                } else {
                  titleInputEmpty = true;
                }
              }}
            />
          </Item>
          <Label style={styles.Title}>Group Name:</Label>
          <Item>
            <Input
              placeholder="Squat Challenge Group"
              style={styles.Text}
              onChangeText={TextInputValue => {
                state.setChallengeInput({
                  ...state.challengeInput,
                  groupName: TextInputValue,
                });
                if (TextInputValue.length > 0) {
                  groupNameInputEmpty = false;
                } else {
                  groupNameInputEmpty = true;
                }
              }}
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
              animationType={'slide'}
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
            block
            style={
              titleInputEmpty || groupNameInputEmpty
                ? styles.btnDisabled
                : styles.btn
            }
            disabled={titleInputEmpty || groupNameInputEmpty}
            onPress={() => navigation.navigate('GroupChallengeType')}>
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
  btnDisabled: {
    marginTop: 20,
    backgroundColor: 'lightgray',
  },
});

export default FormGroup01TitleAndDateAndGroup;
