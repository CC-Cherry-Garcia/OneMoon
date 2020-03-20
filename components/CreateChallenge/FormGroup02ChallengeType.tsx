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

function FormGroup02ChallengeType({navigation}, props) {
  const state = useStore(state => state);

  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1>Choose your Challenge Type</H1>
        <Text>Intro text</Text>
        <Card>
          <CardItem
            header
            button
            onPress={() => navigation.navigate('GroupChallengeQuantityInfo')}>
            <Text>Quantity Challenge</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => navigation.navigate('GroupChallengeQuantityInfo')}>
            <Body>
              <Text>
                Pick this if you want to increase the amount of times you do
                something. For example: 5 more squats everyday.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            header
            button
            onPress={() => navigation.navigate('GroupChallengeTimeInfo')}>
            <Text>Time Challenge</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => navigation.navigate('GroupChallengeTimeInfo')}>
            <Body>
              <Text>
                Pick this if you want to increase the duration you do something.
                For example: Read for 10 minutes longer everyday.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            header
            button
            onPress={() => navigation.navigate('GroupChallengeRepeatInfo')}>
            <Text>Same Daily Goal Challenge</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => navigation.navigate('GroupChallengeRepeatInfo')}>
            <Body>
              <Text>
                Pick this if you want to complete the same goal for 30 days. For
                example: Go for a walk.
              </Text>
            </Body>
          </CardItem>
        </Card>
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

export default FormGroup02ChallengeType;
