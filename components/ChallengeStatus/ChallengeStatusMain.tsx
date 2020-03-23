/* eslint-disable */
import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Share, Alert} from 'react-native';
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
  Body,
} from 'native-base';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import * as mutations from '../../src/graphql/mutations';
import useStore from '../../state/state';
import LocalPushNotificationSetting from '../LocalPushNotificationSetting';
import Colors from '../../variablesColors';

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
        message: `I completed Day ${state.currentChallengeTodayDate} of my ${state.userCurrentChallenge.challenge.title} using #OneMoon. #30DayChallenge`,
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

  async function onShareGroup() {
    try {
      const result = await Share.share({
        message: `Join my Group Challenge on One Moon with this code: ${state.userCurrentChallenge.groupId}. #30DayChallenge`,
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
    let mutation = mutations.updateUserChallenge;
    if (state.userCurrentChallenge.groupId) {
      mutation = mutations.updateGroupChallenge;
    }
    API.graphql(graphqlOperation(mutation, {input}))
      .then(res => {
        state.setCurrentChallengeTodayTaskIsDone(true);
        state.setUserCurrentChallenge({
          ...state.userCurrentChallenge,
          [`task${state.currentChallengeTodayDate}IsDone`]: true,
        });
        Alert.alert('Great Job!!!');
        LocalPushNotificationSetting.completeTodayTask();
        if (
          state.currentChallengeTodayDate === 30 &&
          state.userActiveChallengesList.length === 1
        ) {
          LocalPushNotificationSetting.unregister();
        }
      })
      .catch(error => console.error(error));
  }

  async function notYet() {
    const input = {
      id: state.userCurrentChallenge.id,
      [`task${state.currentChallengeTodayDate}IsDone`]: false,
    };
    let mutation = mutations.updateUserChallenge;
    if (state.userCurrentChallenge.groupId) {
      mutation = mutations.updateGroupChallenge;
    }
    API.graphql(graphqlOperation(mutation, {input}))
      .then(res => {
        state.setCurrentChallengeTodayTaskIsDone(false);
        state.setUserCurrentChallenge({
          ...state.userCurrentChallenge,
          [`task${state.currentChallengeTodayDate}IsDone`]: false,
        });
        Alert.alert('Not complete yet');
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    let query = queries.getUserChallenge;
    if (state.userCurrentChallenge.groupId) {
      query = queries.getGroupChallenge;
    }
    API.graphql(
      graphqlOperation(query, {
        id: state.userCurrentChallenge.id,
      }),
    )
      .then(res => {
        let isDone;
        if (res.data.getUserChallenge) {
          isDone =
            res.data.getUserChallenge[
              `task${state.currentChallengeTodayDate}IsDone`
            ];
        } else {
          isDone =
            res.data.getGroupChallenge[
              `task${state.currentChallengeTodayDate}IsDone`
            ];
        }
        state.setUserCurrentChallenge({
          ...state.userCurrentChallenge,
          [`task${state.currentChallengeTodayDate}IsDone`]: isDone,
        });
      })
      .catch(err => console.log(err));
  }, [state.currentChallengeTodayDate]);

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

  useEffect(() => {
    if (!state.currentChallengeTodayDate) return;
    if (!state.userCurrentChallenge.groupId) return;

    API.graphql(
      graphqlOperation(queries.listGroupChallenges, {
        limit: 1000,
        filter: {groupId: {eq: state.userCurrentChallenge.groupId}},
      }),
    )
      .then(res => {
        const groupChallenges = res.data.listGroupChallenges.items;
        const groupUsersInput = [];
        for (const groupChallengeOfOneUser of groupChallenges) {
          groupUsersInput.push(groupChallengeOfOneUser.userId);
        }
        state.setGroupUsers(groupUsersInput);

        const groupProgressDataInput = [];
        let countOfTotalTasksDone = 0;
        for (const groupChallengeOfOneUser of groupChallenges) {
          const dataInputRow = [];

          if (
            groupChallengeOfOneUser[
              `task${state.currentChallengeTodayDate}IsDone`
            ] === true
          ) {
            dataInputRow.push('👍🏻');
          } else {
            dataInputRow.push('❓');
          }

          let countOfTasksDone = 0;
          for (let [key, value] of Object.entries(groupChallengeOfOneUser)) {
            if (key.slice(-6) === 'IsDone' && value === true) {
              countOfTasksDone++;
            }
          }
          const progressOfOneUser = Math.ceil((countOfTasksDone / 30) * 100);
          dataInputRow.push(`${progressOfOneUser}%`);
          groupProgressDataInput.push(dataInputRow);

          countOfTotalTasksDone += countOfTasksDone;
        }
        const progressOfAllUsersAVG = Math.ceil(
          (countOfTotalTasksDone / (30 * groupChallenges.length)) * 100,
        );
        state.setCurrentGroupTotalProgress(progressOfAllUsersAVG);

        state.setCurrentGroupProgressData(groupProgressDataInput);
      })
      .catch(err => console.log(err));
  }, [state.userCurrentChallenge]);

  return (
    <>
      <Container style={styles.container}>
        <Content>
          <Card style={styles.viewPad}>
            <Body>
              <H1 style={styles.textCenter}>
                {state.userCurrentChallenge.challenge.title}
              </H1>
            </Body>
          </Card>

          <Card style={styles.viewCard}>
            <Body>
              <CardItem header>
                <Text>Today's Task:</Text>
              </CardItem>
            </Body>
            <Body>
              <H2 style={styles.H2}>{state.currentChallengeTodayTaskName}</H2>
              {!state.userCurrentChallenge[
                `task${state.currentChallengeTodayDate}IsDone`
              ] && (
                <Button
                  full
                  onPress={() => completeTask()}
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: Colors.primary,
                  }}>
                  <Text> Did you Complete Today's Task? </Text>
                </Button>
              )}
              {state.userCurrentChallenge[
                `task${state.currentChallengeTodayDate}IsDone`
              ] && (
                <Button
                  full
                  onPress={() => onShare()}
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    backgroundColor: Colors.primary,
                  }}>
                  <Text> Share your Success! </Text>
                </Button>
              )}
            </Body>
          </Card>

          <Card style={styles.viewCard}>
            <Body>
              <CardItem header>
                <Text>
                  Started on{' '}
                  {`${new Date(
                    state.userCurrentChallenge.startDate,
                  ).getFullYear()}/${new Date(
                    state.userCurrentChallenge.startDate,
                  ).getMonth() + 1}/${new Date(
                    state.userCurrentChallenge.startDate,
                  ).getDate()}`}
                </Text>
              </CardItem>
              <CardItem>
                <H2 style={styles.H2}>
                  {state.currentChallengeProgress} % Complete
                </H2>
              </CardItem>
            </Body>
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
            <CardItem style={{padding: 10}}>
              <Table borderStyle={{flex: 1, borderColor: 'transparent'}} style={{flex: 6}}>
                {tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        data={cellData}
                        style={
                          state.currentChallengeCompletedDatesList &&
                          state.currentChallengeCompletedDatesList[index] &&
                          state.currentChallengeCompletedDatesList[index][
                            cellIndex
                          ] === true
                            ? {backgroundColor: '#5cb85c', flex: 1}
                            : Number(tableData[index][cellIndex]) <
                              state.currentChallengeTodayDate
                            ? {backgroundColor: 'lightgrey', flex: 1}
                            : {backgroundColor: 'transparent', flex: 1}
                        }
                        textStyle={styles.text}
                      />
                    ))}
                  </TableWrapper>
                ))}
              </Table>
            </CardItem>
            <CardItem>
              <Text><View style={{width: 20, height: 20, backgroundColor: '#5cb85c', margin: 0}}></View> Completed   <View style={{width: 20, height: 20, backgroundColor: 'lightgray', margin: 0}}></View> Incomplete   <View style={{width: 20, height: 20, backgroundColor: '#FFF1C1', margin: 0}}></View> Upcoming</Text>
            </CardItem>
          </Card>

          <Button
            style={{
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: Colors.primary,
            }}
            block
            onPress={() =>
              navigation.navigate('Home', {screen: 'ChallengeStatusSchedule'})
            }>
            <Text>View Challenge</Text>
          </Button>

          {state.userCurrentChallenge.groupId !== undefined && (
            <Card style={styles.viewCard}>
              <Body>
                <CardItem header>
                  <Text>Group Progress</Text>
                </CardItem>
                <CardItem>
                  <H2
                    style={{
                      color: Colors.primary,
                      fontSize: 28,
                      lineHeight: 32,
                    }}>
                    {state.currentGroupTotalProgress}% Complete
                  </H2>
                </CardItem>
              </Body>
              <CardItem>
                <View style={styles.tableContainer}>
                  <Table borderStyle={{borderWidth: 1}}>
                    <Row
                      data={['', 'today', 'total']}
                      flexArr={[1, 1, 1]}
                      style={styles.tableHead}
                      textStyle={styles.tableHeadText}
                    />
                    <TableWrapper style={styles.tableWrapper}>
                      <Col
                        data={state.groupUsers}
                        style={styles.tableTitle}
                        heightArr={[28, 28]}
                        textStyle={styles.tableText}
                      />
                      <Rows
                        data={state.currentGroupProgressData}
                        flexArr={[1, 1]}
                        style={styles.tableRow}
                        textStyle={styles.tableText}
                      />
                    </TableWrapper>
                  </Table>
                </View>
              </CardItem>
              <Button
                full
                title="Share Group ID"
                onPress={() => onShareGroup()}
                style={styles.btn}>
                <Text>Share Group ID</Text>
              </Button>
            </Card>
          )}
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#F2F2F2'},
  text: {margin: 6, textAlign: 'center'},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1', height: 40},
  viewCard: {
    backgroundColor: '#fff',
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  viewPad: {
    backgroundColor: '#fff',
    padding: 10,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  tableContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  tableHead: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  tableWrapper: {flexDirection: 'row'},
  tableTitle: {flex: 1, backgroundColor: '#f6f8fa'},
  tableRow: {height: 28},
  tableHeadText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableText: {textAlign: 'center'},
  btn: {
    backgroundColor: Colors.primary,
  },
  textCenter: {
    textAlign: 'center',
  },
  H2: {
    color: Colors.primary,
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
  },
});

export default ChallengeStatusMain;
