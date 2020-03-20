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

function FormJoin01Group({navigation}, props) {
  const state = useStore(state => state);

  return (
    <Container style={styles.Container}>
      <Content>
        <H1>Input your Challenge group!</H1>
        <Text>xxxxx.</Text>
        <Form>
          <Label style={styles.Title}>Group id</Label>
          <Item>
            <Input
              placeholder="group id that you want to join!"
              onChangeText={TextInputValue =>
                state.setChallengeInput({
                  ...state.challengeInput,
                  groupId: TextInputValue,
                })
              }
            />
          </Item>
          <Button
            block
            onPress={() =>
              navigation.navigate('JoinGroupChallengeConfirmation')
            }>
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
});

export default FormJoin01Group;
