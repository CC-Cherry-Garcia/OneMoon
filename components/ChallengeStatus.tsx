import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Platform,
  Linking,
  Button,
  TouchableOpacity,
} from 'react-native';
import CupertinoHeaderWithLargeTitle from '../src/sub-components/CupertinoHeaderWithLargeTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import CupertinoButtonSuccess from '../src/sub-components/CupertinoButtonSuccess';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from '../src/graphql/queries';

function ChallengeStatus(props) {

  // async function getChallenge() {
  //   const currentUserChallenges = await API.graphql(graphqlOperation(queries.getChallengeByUser, {userID: props.user.username}));
  //   console.log('**********currentUserChallenges', currentUserChallenges);
  // }


  // const isDone = props.data.task4IsDone;

  // const shareTwitter = async () => {
  //   const shareOptions = {
  //     title: 'Share file',
  //     url: 'http://foo.com',
  //     failOnCancel: false,
  //   };

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     // setResult(JSON.stringify(ShareResponse, null, 2));
  //   } catch (error) {
  //     console.log('Error =>', error);
  //     // setResult('error: '.concat(getErrorString(error)));
  //   }
  // };
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithLargeTitle
        style={styles.cupertinoHeaderWithLargeTitle}
      />
      <Icon name="gear" style={styles.icon} />
      {/* <Text style={styles.createAnAccount2}>{props.data.title}</Text> */}
      <TouchableOpacity
        title="Share Your Progress"
        style={styles.btnStyle}
        onPress={() =>
          Linking.openURL(
            'https://twitter.com/intent/tweet?text=I%20just%20completed%20Day%204%20of%20my%20Squats%20Challenge%20using%20%23OneMoon',
          )
        }>
        <Text style={styles.btnText}>Share Your Progress</Text>
      </TouchableOpacity>

      {/* </View>
      <View style={styles.cupertinoHeaderWithLargeTitleStackColumnFiller}> */}
      <View style={styles.day10StackStack}>
        <View style={styles.day10Stack}>
          <Text style={styles.day10}>Day 4</Text>
        </View>
        <CupertinoButtonSuccess
          text1="Mark Today Done"
          style={styles.cupertinoButtonSuccess1}
        />
        <Text style={styles.todaysTask}>Today&#39;s Task:</Text>
        {/* <Text style={styles.day102}>{props.data.task4Name}</Text> */}
        <Text style={styles.completed}>Completed:</Text>
        {isDone ? (
          <Text style={styles.yes}>Nice job!</Text>
        ) : (
          <Text style={styles.yes}>Not yet</Text>
        )}
      </View>
      {/* <Text style={styles.challengeProgress}>Challenge Progress:</Text> */}
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
    textAlign: 'center',
  },
  cupertinoButtonSuccess2: {
    width: 315,
    height: 72,
    marginTop: 368,
    marginLeft: 30,
    backgroundColor: 'rgba(229,80,57,1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
  },
  btnStyle: {
    width: 315,
    height: 72,
    backgroundColor: 'rgba(229,80,57,1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 15,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 16,
  },

  day10: {
    top: 0,
    left: 0,
    color: 'rgba(232,173,120,1)',
    // position: 'absolute',
    right: 0,
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 15,
  },
  day10Stack: {
    // position: 'absolute',
  },
  cupertinoButtonSuccess1: {
    width: 315,
    height: 72,
    // position: 'absolute',
    marginTop: 15,
  },
  todaysTask: {
    color: 'rgba(232,173,120,1)',
    // position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 15,
  },
  day102: {
    color: 'rgba(232,173,120,1)',
    // position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 15,
  },
  completed: {
    color: 'rgba(232,173,120,1)',
    // position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 15,
  },
  yes: {
    color: 'rgba(232,173,120,1)',
    // position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
  },
  day10StackStack: {
    // position: 'absolute',
  },
  challengeProgress: {
    color: 'rgba(232,173,120,1)',
    // position: 'absolute',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
  },
  cupertinoHeaderWithLargeTitleStackColumnFiller: {
    flex: 1,
  },
});

export default ChallengeStatus;
