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
import * as customMutations from '../../src/graphql/customMutations';
import useStore from '../../state/state';
import LocalPushNotificationSetting from '../LocalPushNotificationSetting';

function Form04ChallengeConfirmation({navigation, route}, props) {
  // console.log('state in Form04ChallengeConfirmation.tsx: ', state);

  const state = useStore(state => state);

  const taskQuantityArray = [];
  const taskName = state.challengeInput.taskName;

  let unitsVariable = ''; // used for Repeating Task
  if (state.challengeType === 'quantity') {
    unitsVariable = 'times';
  } else if (state.challengeType === 'time') {
    unitsVariable = 'minutes';
  }

  const increaseRate = Number(state.challengeInput.increase);
  let i = 1;
  while (i <= 30) {
    if (state.challengeType === 'quantity' || state.challengeType === 'time') {
      taskQuantityArray.push(
        `Day ${i} Task: ${taskName} ${increaseRate * i} ${unitsVariable}`,
      );
    } else {
      taskQuantityArray.push(`Day ${i} Task: ${taskName}`);
    }
    ++i;
  }

  function getDateOfChallenge(ordinalDate) {
    const standardDate = new Date(state.challengeInput.startDate);
    const startDate = standardDate.getDate();
    standardDate.setDate(startDate + ordinalDate - 1);
    return standardDate.toString();
  }

  const challengeInput = {
    title: state.challengeInput.title,
    createdByUserId: route.params.userName,
    increase: increaseRate,
    task1Name: taskQuantityArray[0].split(':')[1].trim(),
    task2Name: taskQuantityArray[1].split(':')[1].trim(),
    task3Name: taskQuantityArray[2].split(':')[1].trim(),
    task4Name: taskQuantityArray[3].split(':')[1].trim(),
    task5Name: taskQuantityArray[4].split(':')[1].trim(),
    task6Name: taskQuantityArray[5].split(':')[1].trim(),
    task7Name: taskQuantityArray[6].split(':')[1].trim(),
    task8Name: taskQuantityArray[7].split(':')[1].trim(),
    task9Name: taskQuantityArray[8].split(':')[1].trim(),
    task10Name: taskQuantityArray[9].split(':')[1].trim(),
    task11Name: taskQuantityArray[10].split(':')[1].trim(),
    task12Name: taskQuantityArray[11].split(':')[1].trim(),
    task13Name: taskQuantityArray[12].split(':')[1].trim(),
    task14Name: taskQuantityArray[13].split(':')[1].trim(),
    task15Name: taskQuantityArray[14].split(':')[1].trim(),
    task16Name: taskQuantityArray[15].split(':')[1].trim(),
    task17Name: taskQuantityArray[16].split(':')[1].trim(),
    task18Name: taskQuantityArray[17].split(':')[1].trim(),
    task19Name: taskQuantityArray[18].split(':')[1].trim(),
    task20Name: taskQuantityArray[19].split(':')[1].trim(),
    task21Name: taskQuantityArray[20].split(':')[1].trim(),
    task22Name: taskQuantityArray[21].split(':')[1].trim(),
    task23Name: taskQuantityArray[22].split(':')[1].trim(),
    task24Name: taskQuantityArray[23].split(':')[1].trim(),
    task25Name: taskQuantityArray[24].split(':')[1].trim(),
    task26Name: taskQuantityArray[25].split(':')[1].trim(),
    task27Name: taskQuantityArray[26].split(':')[1].trim(),
    task28Name: taskQuantityArray[27].split(':')[1].trim(),
    task29Name: taskQuantityArray[28].split(':')[1].trim(),
    task30Name: taskQuantityArray[29].split(':')[1].trim(),
  };
  const userChallengeInput = {
    userId: route.params.userName,
    startDate: state.challengeInput.startDate,
    isValid: true,
    task1IsDone: false,
    task2IsDone: false,
    task3IsDone: false,
    task4IsDone: false,
    task5IsDone: false,
    task6IsDone: false,
    task7IsDone: false,
    task8IsDone: false,
    task9IsDone: false,
    task10IsDone: false,
    task11IsDone: false,
    task12IsDone: false,
    task13IsDone: false,
    task14IsDone: false,
    task15IsDone: false,
    task16IsDone: false,
    task17IsDone: false,
    task18IsDone: false,
    task19IsDone: false,
    task20IsDone: false,
    task21IsDone: false,
    task22IsDone: false,
    task23IsDone: false,
    task24IsDone: false,
    task25IsDone: false,
    task26IsDone: false,
    task27IsDone: false,
    task28IsDone: false,
    task29IsDone: false,
    task30IsDone: false,
    task1Date: getDateOfChallenge(1),
    task2Date: getDateOfChallenge(2),
    task3Date: getDateOfChallenge(3),
    task4Date: getDateOfChallenge(4),
    task5Date: getDateOfChallenge(5),
    task6Date: getDateOfChallenge(6),
    task7Date: getDateOfChallenge(7),
    task8Date: getDateOfChallenge(8),
    task9Date: getDateOfChallenge(9),
    task10Date: getDateOfChallenge(10),
    task11Date: getDateOfChallenge(11),
    task12Date: getDateOfChallenge(12),
    task13Date: getDateOfChallenge(13),
    task14Date: getDateOfChallenge(14),
    task15Date: getDateOfChallenge(15),
    task16Date: getDateOfChallenge(16),
    task17Date: getDateOfChallenge(17),
    task18Date: getDateOfChallenge(18),
    task19Date: getDateOfChallenge(19),
    task20Date: getDateOfChallenge(20),
    task21Date: getDateOfChallenge(21),
    task22Date: getDateOfChallenge(22),
    task23Date: getDateOfChallenge(23),
    task24Date: getDateOfChallenge(24),
    task25Date: getDateOfChallenge(25),
    task26Date: getDateOfChallenge(26),
    task27Date: getDateOfChallenge(27),
    task28Date: getDateOfChallenge(28),
    task29Date: getDateOfChallenge(29),
    task30Date: getDateOfChallenge(30),
  };
  const insertChallenge = () => {
    API.graphql(
      graphqlOperation(customMutations.createNewChallenge, {
        inputChallenge: challengeInput,
      }),
    )
    .then(res => {
      console.log('userChallengeInput:  ********  ', {
        ...userChallengeInput,
        challengeId: res.data.createChallenge.id,
      });
      console.log('res:  ********  ', res);
      API.graphql(
        graphqlOperation(
          customMutations.createUserChallengeWithGroupAndChallenge,
          {
            inputUserChallenge: {
              ...userChallengeInput,
              challengeId: res.data.createChallenge.id,
            },
          },
        ),
      )
      .then(res => {
        console.log('res createUserChallengeWithChallenge:', res);
        state.setUserHasActiveChallenge(true);
        state.setUserActiveChallengesList([
          ...state.userActiveChallengesList,
          res.data.createUserChallenge,
        ]);
        LocalPushNotificationSetting.register(
          9,
          0,
          0,
          'You have a daily goal to complete',
          21,
          0,
          0,
          'Did you complete your goal for today?',
        );
      })
      .catch(error =>
        console.log(
          'Error happens in createUserChallengeWithChallenge: ',
          error,
        ),
      );
    })
    .catch(error => console.log('Error happens in createChallenge: ', error));
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
          Start Date:{' '}
          {`${new Date(
            state.challengeInput.startDate,
          ).getFullYear()}/${new Date(
            state.challengeInput.startDate,
          ).getMonth() + 1}/${new Date(
            state.challengeInput.startDate,
          ).getDate()}`}
        </Text>
        <Button
          style={styles.btn}
          title="Start Challenge"
          onPress={() => {
            insertChallenge();
            // props.changeView();
            navigation.navigate('Home', {screen: 'HomeUser'});
          }}>
          <Text>Save Challenge</Text>
        </Button>
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
          style={styles.btn}
          title="Start Challenge"
          onPress={() => {
            insertChallenge();
            // props.changeView();
            navigation.navigate('Home', {screen: 'HomeUser'});
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
