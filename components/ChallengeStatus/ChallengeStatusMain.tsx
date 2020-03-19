/* eslint-disable */
import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Share, Alert} from 'react-native';
import {Table, TableWrapper, Cell} from 'react-native-table-component';
import {
  Container,
  Content,
  H1,
  H2,
  H3,
  Text,
  Button,
  Card,
  CardItem,
  Left,
  Right,
  List,
  ListItem,
  Icon,
  Fab
} from 'native-base';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import useStore from '../../state/state';
import LocalPushNotificationSetting from '../LocalPushNotificationSetting';

function ChallengeStatusMain({navigation, route}, props) {
  const state = useStore(state => state);
  const tableData = [
    ['1', '2', '3', '4', '5', '6'],
    ['7', '8', '9', '10', '11', '12'],
    ['13', '14', '15', '16', '17', '18'],
    ['19', '20', '21', '22', '23', '24'],
    ['25', '26', '27', '28', '29', '30'],
  ];

  async function onShare() {
    try {
      const result = await Share.share({
        message:
          `I just completed Day ${state.currentChallengeTodayDate} of my ${state.userCurrentChallenge.title}. #30DayChallenge`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function completeTask() {
    const input = {
      id: state.userCurrentChallenge.id,
      [`task${state.currentChallengeTodayDate}IsDone`]: true,
    };

    API.graphql(graphqlOperation(mutations.updateChallenge, {input}))
      .then(res => {
        state.setCurrentChallengeTodayTaskIsDone(true);
        state.setUserCurrentChallenge({
          ...state.userCurrentChallenge,
          [`task${state.currentChallengeTodayDate}IsDone`]: true,
        });
        Alert.alert('Great Job!!!');
        LocalPushNotificationSetting.completeTodayTask();
        if (
          state.currentChallengeTodayDate == 30 &&
          state.userActiveChallengesList.length == 1
        ) {
          LocalPushNotificationSetting.unregister();
        }
      })
      .catch(error => console.error(error));
  }


  async function notYet() {
    const input = {
      id: state.userCurrentChallenge.id,
      [`task${state.currentChallengeTodayDate}IsDone`]: false
    };

    API.graphql(graphqlOperation(mutations.updateChallenge, {input}))
    .then(res => {
      state.setCurrentChallengeTodayTaskIsDone(false);
      state.setUserCurrentChallenge({...state.userCurrentChallenge, [`task${state.currentChallengeTodayDate}IsDone`]: false});
      Alert.alert("Not complete yet");
    })
    .catch(error => console.error(error));
  }

  useEffect(() => {
    API.graphql(
      graphqlOperation(queries.getChallenge, {
        id: state.userCurrentChallenge.id,
      }),
    )
      .then(res => {
        const isDone =
          res.data.getChallenge[`task${state.currentChallengeTodayDate}IsDone`];
        state.setUserCurrentChallenge({
          ...state.userCurrentChallenge,
          [`task${state.currentChallengeTodayDate}IsDone`]: isDone,
        });
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    const completedDates = [
      [
        state.userCurrentChallenge.task1IsDone,
        state.userCurrentChallenge.task2IsDone,
        state.userCurrentChallenge.task3IsDone,
        state.userCurrentChallenge.task4IsDone,
        state.userCurrentChallenge.task5IsDone,
        state.userCurrentChallenge.task6IsDone,
      ],
      [
        state.userCurrentChallenge.task7IsDone,
        state.userCurrentChallenge.task8IsDone,
        state.userCurrentChallenge.task9IsDone,
        state.userCurrentChallenge.task10IsDone,
        state.userCurrentChallenge.task11IsDone,
        state.userCurrentChallenge.task12IsDone,
      ],
      [
        state.userCurrentChallenge.task13IsDone,
        state.userCurrentChallenge.task14IsDone,
        state.userCurrentChallenge.task15IsDone,
        state.userCurrentChallenge.task16IsDone,
        state.userCurrentChallenge.task17IsDone,
        state.userCurrentChallenge.task18IsDone,
      ],
      [
        state.userCurrentChallenge.task19IsDone,
        state.userCurrentChallenge.task20IsDone,
        state.userCurrentChallenge.task21IsDone,
        state.userCurrentChallenge.task22IsDone,
        state.userCurrentChallenge.task23IsDone,
        state.userCurrentChallenge.task24IsDone,
      ],
      [
        state.userCurrentChallenge.task25IsDone,
        state.userCurrentChallenge.task26IsDone,
        state.userCurrentChallenge.task27IsDone,
        state.userCurrentChallenge.task28IsDone,
        state.userCurrentChallenge.task29IsDone,
        state.userCurrentChallenge.task30IsDone,
      ],
    ];
    state.setCurrentChallengeCompletedDatesList(completedDates);
  }, [state.userCurrentChallenge]);

  useEffect(() => {
    if (!state.currentChallengeCompletedDatesList) return;
    let completedCount = 0;
    for (const row of state.currentChallengeCompletedDatesList) {
      for (const col of row) {
        if (col === true) ++completedCount;
      }
    }
    state.setCurrentChallengeProgress(Math.ceil((completedCount / 30) * 100));
  }, [state.currentChallengeCompletedDatesList]);

  return (
    <>
      <Container style={styles.container}>
        <Content>
          <H1>
            Day {state.currentChallengeTodayDate} : {state.currentChallengeTodayTaskName}
          </H1>
          {
            state.currentChallengeTodayTaskIsDone
            ? <Button style={{flex:1, marginTop: 30, width: 100}} danger bordered onPress={() => notYet()}>
                <Text> Not yet </Text>
              </Button>
            : <Button style={{flex:1, marginTop: 30}} block primary onPress={() => completeTask()}>
                <Text> Complete! </Text>
              </Button>
          }
          {/* <Button style={{flex:1, marginTop: 30}} block primary onPress={() => completeTask()}>
            <Text> Complete! </Text>
          </Button> */}

          <Card style={{marginTop: 30}}>
            <CardItem>
              <H2>{state.userCurrentChallenge.title}</H2>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <H3 style={{alignSelf: 'center'}}>
                Progress {state.currentChallengeProgress} %
              </H3>
            </CardItem>
            <CardItem>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: state.currentChallengeProgress,
                    flexDirection: 'row',
                    height: 20,
                    backgroundColor: '#5cb85c',
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                />
                <View
                  style={{
                    flex: 100 - state.currentChallengeProgress,
                    flexDirection: 'row',
                    height: 20,
                    backgroundColor: 'lightgrey',
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
              </View>
            </CardItem>
          </Card>
          <Card style={{marginBottom: 20, padding: 10}}>
            <CardItem>
              <Text style={styles.startDate}>
                Start Date:{' '}
                {`${new Date(
                  state.userCurrentChallenge.startDate,
                ).getFullYear()}/${new Date(
                  state.userCurrentChallenge.startDate,
                ).getMonth() + 1}/${new Date(
                  state.userCurrentChallenge.startDate,
                ).getDate()}`}
              </Text>
            </CardItem>
            <Table borderStyle={{flex: 1, borderColor: 'transparent'}} style={{borderColor: 'red'}}>
              {tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={cellData}
                      style={
                        state.currentChallengeCompletedDatesList 
                          && state.currentChallengeCompletedDatesList[index] 
                          && state.currentChallengeCompletedDatesList[index][cellIndex] === true
                          ? {backgroundColor: '#5cb85c', flex: 1}
                          : Number(tableData[index][cellIndex]) < state.currentChallengeTodayDate
                            ? {backgroundColor: '#ffa39e', flex: 1}
                            : tableData[index][cellIndex] == state.currentChallengeTodayDate
                              ? {backgroundColor: 'transparent', flex: 1, borderWidth: 3, borderBottomColor: '#007aff'}
                              : {backgroundColor: 'transparent', flex: 1}
                      }
                      textStyle={
                        tableData[index][cellIndex] == state.currentChallengeTodayDate
                        ? state.currentChallengeTodayTaskIsDone
                          ? styles.todayCompletedText
                          : styles.todayText
                        : styles.text
                      }
                    />
                  ))}
                </TableWrapper>
              ))}
            </Table>
          </Card>
          <Button 
            iconRight 
            light 
            style={{
              width: 130,
              marginTop: 20,
              marginBottom: 20
            }}
            onPress={() => navigation.navigate('Home', {screen: 'ChallengeStatusSchedule'})
          }>
            <Text>Schedule</Text>
            <Icon name='arrow-forward' />
          </Button>
          <Fab
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
          >
            <Icon 
              name="share"
              onPress={() => onShare()}
            />
          </Fab>
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  text: {margin: 6, textAlign: 'center'},
  todayText: {margin: 6, textAlign: 'center', fontWeight: '700', fontStyle: 'italic', color: '#007aff', fontSize: 18},
  todayCompletedText: {margin: 6, textAlign: 'center', fontWeight: '700', fontStyle: 'italic', color: '#ffffff', fontSize: 20},
  row: {flex: 6, flexDirection: 'row', backgroundColor: '#FFF1C1', height: 40},
  startDate: {color: 'gray'},
});

export default ChallengeStatusMain;
