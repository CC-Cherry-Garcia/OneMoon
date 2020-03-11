import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, Button, FlatList} from 'react-native';
import CupertinoHeaderWithLargeTitle from '../src/sub-components/CupertinoHeaderWithLargeTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from '../src/graphql/queries';
import * as mutations from '../src/graphql/mutations';


function FirstTimeChallengeTypeQuantityConfirm(props) {
  const taskQuantityArray = [];
  const taskName = props.challengeInput.taskName;  
  const increaseRate = Number(props.challengeInput.increase);
  let i = 1;
  while (i <= 30) {
    taskQuantityArray.push(`Day${i} Task: ${taskName} ${increaseRate * i} times`);
    ++i;
  }

  const challengeInput = {
    id: props.challengeInput.title,
    userID: props.state.user.username,
    title: props.challengeInput.title,
    startDate: props.challengeInput.startDate,
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
  }

  console.log('*************challenge: ', challengeInput);

  function insertChallenge() {
    API.graphql(graphqlOperation(mutations.createChallenge, {input: challengeInput}))
    .then((res) => {
      props.setCurrentChallengeId(res.data.id);
    })
    .catch((error) => console.log(error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.cupertinoHeaderWithLargeTitleStack}>
        <CupertinoHeaderWithLargeTitle
          style={styles.cupertinoHeaderWithLargeTitle}
        />
        <Icon name="gear" style={styles.icon} />
      </View>
      <StatusBar animated={false} hidden={true} />
      <Text>Title: {props.challengeInput.title}</Text>
      <Text>Start Date: {props.challengeInput.startDate}</Text>
      <Text>{taskQuantityArray[0]}</Text>
      <Text>{taskQuantityArray[1]}</Text>
      <Text>{taskQuantityArray[2]}</Text>
      <Text>{taskQuantityArray[3]}</Text>
      <Text>{taskQuantityArray[4]}</Text>
      <Text>{taskQuantityArray[5]}</Text>
      <Text>{taskQuantityArray[6]}</Text>
      <Text>{taskQuantityArray[7]}</Text>
      <Text>{taskQuantityArray[8]}</Text>
      <Text>{taskQuantityArray[9]}</Text>
      <Text>{taskQuantityArray[10]}</Text>
      <Text>{taskQuantityArray[11]}</Text>
      <Text>{taskQuantityArray[12]}</Text>
      <Text>{taskQuantityArray[13]}</Text>
      <Text>{taskQuantityArray[14]}</Text>
      <Text>{taskQuantityArray[15]}</Text>
      <Text>{taskQuantityArray[16]}</Text>
      <Text>{taskQuantityArray[17]}</Text>
      <Text>{taskQuantityArray[18]}</Text>
      <Text>{taskQuantityArray[19]}</Text>
      <Text>{taskQuantityArray[20]}</Text>
      <Text>{taskQuantityArray[21]}</Text>
      <Text>{taskQuantityArray[22]}</Text>
      <Text>{taskQuantityArray[23]}</Text>
      <Text>{taskQuantityArray[24]}</Text>
      <Text>{taskQuantityArray[25]}</Text>
      <Text>{taskQuantityArray[26]}</Text>
      <Text>{taskQuantityArray[27]}</Text>
      <Text>{taskQuantityArray[28]}</Text>
      <Text>{taskQuantityArray[29]}</Text>
      <Button
        title="Start Challenge"
        onPress={() => {
          insertChallenge();
          props.changeView();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(60,99,130,1)',
  },
  cupertinoHeaderWithLargeTitle: {
    top: 0,
    left: 0,
    // width: 375,
    height: 96,
    position: 'absolute',
  },
  icon: {
    top: 56,
    left: 335,
    position: 'absolute',
    color: 'rgba(10,61,98,1)',
    fontSize: 29,
  },
  cupertinoHeaderWithLargeTitleStack: {
    // width: 375,
    height: 96,
  },
  createAnAccount2: {
    color: 'rgba(248,194,145,1)',
    fontSize: 30,
    fontFamily: 'ArchivoBlack-Regular',
    marginTop: 32,
    marginLeft: 30,
  },
  loremIpsum3: {
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'left',
    marginTop: 22,
    marginLeft: 30,
  },
  cupertinoButtonSuccess1: {
    width: 315,
    height: 72,
    marginTop: 594,
    marginLeft: 30,
  },
  rect1: {
    height: 7,
    backgroundColor: 'rgba(130,204,221,1)',
    marginTop: -640,
  },
  text: {
    width: 292,
    height: 29,
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    marginTop: 26,
    marginLeft: 30,
  },
  dailyTask: {
    width: 292,
    height: 29,
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    marginTop: 54,
    marginLeft: 30,
  },
  email1: {
    width: 315,
    height: 57,
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    marginTop: 11,
    marginLeft: 30,
  },
  dailyTask2: {
    width: 292,
    height: 29,
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    marginTop: 32,
    marginLeft: 30,
  },
  textInput: {
    width: 315,
    height: 57,
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    marginTop: 11,
    marginLeft: 30,
  },
  day1: {
    width: 70,
    height: 29,
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
  },
  day12: {
    width: 159,
    height: 29,
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    marginLeft: 6,
  },
  day1Row: {
    height: 29,
    flexDirection: 'row',
    marginTop: 79,
    marginLeft: 30,
    marginRight: 110,
  },
  day2: {
    top: 0,
    left: 0,
    width: 70,
    height: 29,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
  },
  day22: {
    top: 21,
    left: 0,
    width: 317,
    height: 29,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
  },
  day2Stack: {
    top: 0,
    left: 0,
    width: 317,
    height: 50,
    position: 'absolute',
  },
  text2: {
    top: 0,
    left: 76,
    width: 159,
    height: 29,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
  },
  day2StackStack: {
    width: 317,
    height: 50,
    marginTop: 12,
    marginLeft: 30,
  },
  day30: {
    top: 0,
    left: 0,
    width: 100,
    height: 29,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
  },
  text3: {
    top: 0,
    left: 94,
    width: 159,
    height: 29,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
  },
  day30Stack: {
    width: 253,
    height: 29,
    marginTop: 5,
    marginLeft: 30,
  },
  rect2: {
    height: 7,
    backgroundColor: 'rgba(130,204,221,1)',
    marginTop: -165,
    marginLeft: 1,
    marginRight: -1,
  },
});

export default FirstTimeChallengeTypeQuantityConfirm;
