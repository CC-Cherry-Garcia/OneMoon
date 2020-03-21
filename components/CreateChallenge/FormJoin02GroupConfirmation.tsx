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
  Spinner,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import useStore from '../../state/state';
import LocalPushNotificationSetting from '../LocalPushNotificationSetting';

function FormJoin02GroupConfirmation({navigation, route}, props) {
  const state = useStore(state => state);
  const [loading, setLoading] = useState(true);

  //To get group challenge data
  useEffect(() => {
    const getGroupChallenge = async () => {
      const result = await API.graphql(
        graphqlOperation(queries.listGroupChallenges, {
          limit: 1000, //Just in case
          filter: {groupId: {eq: state.challengeInput.groupId}},
        }),
      );

      state.setGroupChallengeInformation(
        result.data.listGroupChallenges.items[0],
      );
      setLoading(false);
      console.log(
        'state.groupChallengeInformation :',
        state.groupChallengeInformation,
      );
    };
    getGroupChallenge();
  }, []);

  const groupChallengeInput = {
    groupId: state.challengeInput.groupId,
    userId: route.params.userName,
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
  };
  const insertChallenge = () => {
    API.graphql(
      graphqlOperation(mutations.createGroupChallenge, {
        input: {
          ...groupChallengeInput,
          challengeId: state.groupChallengeInformation.challengeId,
          startDate: state.groupChallengeInformation.startDate,
          task1Date: state.groupChallengeInformation.task1Date,
          task2Date: state.groupChallengeInformation.task2Date,
          task3Date: state.groupChallengeInformation.task3Date,
          task4Date: state.groupChallengeInformation.task4Date,
          task5Date: state.groupChallengeInformation.task5Date,
          task6Date: state.groupChallengeInformation.task6Date,
          task7Date: state.groupChallengeInformation.task7Date,
          task8Date: state.groupChallengeInformation.task8Date,
          task9Date: state.groupChallengeInformation.task9Date,
          task10Date: state.groupChallengeInformation.task10Date,
          task11Date: state.groupChallengeInformation.task11Date,
          task12Date: state.groupChallengeInformation.task12Date,
          task13Date: state.groupChallengeInformation.task13Date,
          task14Date: state.groupChallengeInformation.task14Date,
          task15Date: state.groupChallengeInformation.task15Date,
          task16Date: state.groupChallengeInformation.task16Date,
          task17Date: state.groupChallengeInformation.task17Date,
          task18Date: state.groupChallengeInformation.task18Date,
          task19Date: state.groupChallengeInformation.task19Date,
          task20Date: state.groupChallengeInformation.task20Date,
          task21Date: state.groupChallengeInformation.task21Date,
          task22Date: state.groupChallengeInformation.task22Date,
          task23Date: state.groupChallengeInformation.task23Date,
          task24Date: state.groupChallengeInformation.task24Date,
          task25Date: state.groupChallengeInformation.task25Date,
          task26Date: state.groupChallengeInformation.task26Date,
          task27Date: state.groupChallengeInformation.task27Date,
          task28Date: state.groupChallengeInformation.task28Date,
          task29Date: state.groupChallengeInformation.task29Date,
          task30Date: state.groupChallengeInformation.task30Date,
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

  const checkUserHasGroupChallenge = () => {
    return state.userActiveChallengesList.find(x => {
      console.log('x.groupId :', x.groupId);
      return x.groupId && x.groupId === state.challengeInput.groupId;
    });
  };
  if (loading) {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  } else if (checkUserHasGroupChallenge()) {
    Alert.alert(
      'Error',
      'You have already joined this group challenge',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('JoinGroupChallenge'),
        },
      ],
      {cancelable: false},
    );
    return <></>;
  } else if (
    typeof state.groupChallengeInformation !== 'object' ||
    Object.keys(state.groupChallengeInformation).length === 0
  ) {
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
            Title: {state.groupChallengeInformation.challenge.title}
          </Text>
          <H1>Double check your Challenge</H1>
          <Text style={styles.textDefault}>
            See your 30-day challenge below. Use the back button if you need to
            make any changes.
          </Text>

          <Text style={styles.textDefault}>
            Start Date: {state.groupChallengeInformation.startDate}
          </Text>
          <List>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task1Name}</Text>
            </ListItem>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task2Name}</Text>
            </ListItem>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task3Name}</Text>
            </ListItem>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task4Name}</Text>
            </ListItem>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task5Name}</Text>
            </ListItem>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task6Name}</Text>
            </ListItem>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task7Name}</Text>
            </ListItem>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task8Name}</Text>
            </ListItem>
            <ListItem>
              <Text>{state.groupChallengeInformation.challenge.task9Name}</Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task10Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task11Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task12Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task13Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task14Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task15Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task16Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task17Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task18Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task19Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task20Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task21Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task22Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task23Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task24Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task25Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task26Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task27Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task28Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task29Name}
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                {state.groupChallengeInformation.challenge.task30Name}
              </Text>
            </ListItem>
          </List>
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
