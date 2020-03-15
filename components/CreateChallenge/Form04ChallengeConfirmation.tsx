import React, {Component} from 'react';
import {StyleSheet, TextInput, Alert} from 'react-native';
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
  View,
  StatusBar,
  FlatList,
  List,
  ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import useStore from '../../state/state';

function Form04ChallengeConfirmation({navigation, route}, props) {
  console.log('state in Form04ChallengeConfirmation.tsx: ', state);

  const state = useStore(state => state);

  let unitsVariable = ''; // used for Repeating Task
  if (state.challengeType === 'quantity') {
    unitsVariable = 'times';
  } else if (state.challengeType === 'time') {
    unitsVariable = 'minutes';
  }

  const taskQuantityArray = [];
  const taskName = state.challengeInput.taskName;

  // const taskName = props.challengeInput.taskName;
  const increaseRate = Number(state.challengeInput.increase);
  let i = 1;
  while (i <= 30) {
    taskQuantityArray.push(
      `Day ${i} Task: ${taskName} ${increaseRate * i} ${unitsVariable}`,
    );
    ++i;
  }

  const challengeInput = {
    id: state.challengeInput.title,
    userID: route.params.userName,
    title: state.challengeInput.title,
    startDate: state.challengeInput.startDate,
    increase: increaseRate,
    isValid: true,
    task1Name: taskQuantityArray[0].split(':')[1].trim(),
    task1IsDone: false,
    task2Name: taskQuantityArray[1].split(':')[1].trim(),
    task2IsDone: false,
    task3Name: taskQuantityArray[2].split(':')[1].trim(),
    task3IsDone: false,
    task4Name: taskQuantityArray[3].split(':')[1].trim(),
    task4IsDone: false,
    task5Name: taskQuantityArray[4].split(':')[1].trim(),
    task5IsDone: false,
    task6Name: taskQuantityArray[5].split(':')[1].trim(),
    task6IsDone: false,
    task7Name: taskQuantityArray[6].split(':')[1].trim(),
    task7IsDone: false,
    task8Name: taskQuantityArray[7].split(':')[1].trim(),
    task8IsDone: false,
    task9Name: taskQuantityArray[8].split(':')[1].trim(),
    task9IsDone: false,
    task10Name: taskQuantityArray[9].split(':')[1].trim(),
    task10IsDone: false,
    task11Name: taskQuantityArray[10].split(':')[1].trim(),
    task11IsDone: false,
    task12Name: taskQuantityArray[11].split(':')[1].trim(),
    task12IsDone: false,
    task13Name: taskQuantityArray[12].split(':')[1].trim(),
    task13IsDone: false,
    task14Name: taskQuantityArray[13].split(':')[1].trim(),
    task14IsDone: false,
    task15Name: taskQuantityArray[14].split(':')[1].trim(),
    task15IsDone: false,
    task16Name: taskQuantityArray[15].split(':')[1].trim(),
    task16IsDone: false,
    task17Name: taskQuantityArray[16].split(':')[1].trim(),
    task17IsDone: false,
    task18Name: taskQuantityArray[17].split(':')[1].trim(),
    task18IsDone: false,
    task19Name: taskQuantityArray[18].split(':')[1].trim(),
    task19IsDone: false,
    task20Name: taskQuantityArray[19].split(':')[1].trim(),
    task20IsDone: false,
    task21Name: taskQuantityArray[20].split(':')[1].trim(),
    task21IsDone: false,
    task22Name: taskQuantityArray[21].split(':')[1].trim(),
    task22IsDone: false,
    task23Name: taskQuantityArray[22].split(':')[1].trim(),
    task23IsDone: false,
    task24Name: taskQuantityArray[23].split(':')[1].trim(),
    task24IsDone: false,
    task25Name: taskQuantityArray[24].split(':')[1].trim(),
    task25IsDone: false,
    task26Name: taskQuantityArray[25].split(':')[1].trim(),
    task26IsDone: false,
    task27Name: taskQuantityArray[26].split(':')[1].trim(),
    task27IsDone: false,
    task28Name: taskQuantityArray[27].split(':')[1].trim(),
    task28IsDone: false,
    task29Name: taskQuantityArray[28].split(':')[1].trim(),
    task29IsDone: false,
    task30Name: taskQuantityArray[29].split(':')[1].trim(),
    task30IsDone: false,
  };

  console.log('*************challenge: ', challengeInput);

  const insertChallenge = () => {
    console.log('insert-challengeInput :', challengeInput);
    API.graphql(
      graphqlOperation(mutations.createChallenge, {input: challengeInput}),
    )
      .then(res => {
        state.setCurrentChallengeId(res.data.id);
        state.setUserCurrentChallenge(challengeInput);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1>Double check your Challenge</H1>
        <Text style={styles.textDefault}>
          See your 30-day challenge below. Use the back button if you need to
          make any changes.
        </Text>
        <Text style={styles.textDefault}>
          Title: {state.challengeInput.title}
        </Text>
        <Text style={styles.textDefault}>
          Start Date: {state.challengeInput.startDate}
        </Text>
        <List>
          <ListItem>
            <Text>{taskQuantityArray[0]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[1]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[2]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[3]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[4]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[5]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[6]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[7]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[8]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[9]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[10]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[11]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[12]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[13]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[14]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[15]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[16]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[17]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[18]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[19]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[20]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[21]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[22]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[23]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[24]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[25]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[26]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[27]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[28]}</Text>
          </ListItem>
          <ListItem>
            <Text>{taskQuantityArray[29]}</Text>
          </ListItem>
        </List>
        <Button
          title="Start Challenge"
          onPress={() => {
            insertChallenge();
            // props.changeView();
            navigation.navigate('One Moon');
          }}>
          <Text>Save Challenge</Text>
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

export default Form04ChallengeConfirmation;
