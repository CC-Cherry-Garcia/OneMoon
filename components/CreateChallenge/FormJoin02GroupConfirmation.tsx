import React, {Component, useEffect, useState} from 'react';
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
import LocalPushNotificationSetting from '../LocalPushNotificationSetting';

function FormJoin02GroupConfirmation({navigation, route}, props) {
  const state = useStore(state => state);
  const [test, setTest] = useState(0);
  const taskQuantityArray = [];
  // const taskName = state.challengeInput.taskName;

  //To get group challenge data
  useEffect(() => {
    setTest(2000);
    console.log('state.challengeInput.groupId :', state.challengeInput.groupId);
    const getGroupChallenge = async () => {
      setTest(11000);
      const result = await API.graphql(
        graphqlOperation(queries.listGroupChallenges, {
          limit: 1000, //Just in case
          filter: {groupId: {eq: state.challengeInput.groupId}},
        }),
      );

      console.log(
        'result listGroupChallenges userEffect:',
        result.data.listGroupChallenges.items[0],
      );

      state.setGroupChallengeInformation(
        result.data.listGroupChallenges.items[0],
      );

      console.log(
        'state.groupChallengeInformation :',
        state.groupChallengeInformation,
      );
    };
    getGroupChallenge();
  }, []);

  // if (state.challengeType === 'quantity') {
  //   unitsVariable = 'times';
  // } else if (state.challengeType === 'time') {
  //   unitsVariable = 'minutes';
  // }

  function getDateOfChallenge(ordinalDate) {
    const standardDate = new Date(state.groupChallengeInformation.startDate);
    const startDate = standardDate.getDate();
    standardDate.setDate(startDate + ordinalDate - 1);
    return standardDate.toString();
  }

  const groupChallengeInput = {
    groupId: state.challengeInput.groupId,
    userId: route.params.userName,
    isValid: true,
    startDate: state.groupChallengeInformation.startDate,
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
    console.log('groupChallengeInput:  ********  ', {
      ...groupChallengeInput,
      challengeId: state.groupChallengeInformation.challengeId,
    });

    API.graphql(
      graphqlOperation(mutations.createGroupChallenge, {
        input: {
          ...groupChallengeInput,
          challengeId: state.groupChallengeInformation.challengeId,
          startDate: state.groupChallengeInformation.startDate,
        },
      }),
    )
      .then(res => {
        console.log('res createGroupChallenge:', res);
        state.setUserHasActiveChallenge(true);
        state.setUserActiveChallengesList([
          ...state.userActiveChallengesList,
          res.data.createGroupChallenge,
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
        console.log('Error happens in createGroupChallenge: ', error),
      );
  };
  console.log(
    'state.groupChallengeInformation :',
    state.groupChallengeInformation,
  );
  if (state.groupChallengeInformation === {}) {
    Alert.alert(
      'Error',
      'There is no group challenge id',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('JoinGroupChallenge'),
        },
      ],
      {cancelable: false},
    );
    return <></>;
  } else {
    return (
      <Container style={styles.Container}>
        <Content padder>
          <Text style={styles.textDefault}>
            data={test}
            {/* Title: {state.groupChallengeInformation.challenge.title} */}
          </Text>
          {/*   <H1>Double check your Challenge</H1>
        <Text style={styles.textDefault}>
          See your 30-day challenge below. Use the back button if you need to
          make any changes.
        </Text>
        
        <Text style={styles.textDefault}>
          Start Date: {state.groupChallengeInformation.startDate}
        </Text>
        {/* <List>
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
        </List> */}
          <Button
            title="Start Group Challenge"
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

export default FormJoin02GroupConfirmation;
