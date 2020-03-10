import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Platform,
  Linking,
  Button,
} from 'react-native';
import CupertinoHeaderWithLargeTitle from '../src/sub-components/CupertinoHeaderWithLargeTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import CupertinoButtonSuccess from '../src/sub-components/CupertinoButtonSuccess';

function ChallengeStatus(props) {
  const isDone = props.data.task4IsDone;

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
      <View style={styles.cupertinoHeaderWithLargeTitleStackColumn}>
        <View style={styles.cupertinoHeaderWithLargeTitleStack}>
          <CupertinoHeaderWithLargeTitle
            style={styles.cupertinoHeaderWithLargeTitle}
          />
          <Icon name="gear" style={styles.icon} />
          <StatusBar animated={false} hidden={true} />
        </View>
        <Text style={styles.createAnAccount2}>{props.data.title}</Text>
        <Button
          title="Share Your Progress"
          style={styles.cupertinoButtonSuccess2}
          onPress={() =>
            Linking.openURL(
              'https://twitter.com/intent/tweet?text=Hello%20world',
            )
          }
        />

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
          <Text style={styles.day102}>{props.data.task4Name}</Text>
          <Text style={styles.completed}>Completed:</Text>
          {isDone ? (
            <Text style={styles.yes}>Nice job!</Text>
          ) : (
            <Text style={styles.yes}>Not yet</Text>
          )}
        </View>
        <Text style={styles.challengeProgress}>Challenge Progress:</Text>
      </View>
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
    width: 375,
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
    width: 375,
    height: 96,
  },
  createAnAccount2: {
    color: 'rgba(248,194,145,1)',
    fontSize: 30,
    fontFamily: 'ArchivoBlack-Regular',
    marginTop: 32,
    marginLeft: 30,
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
  cupertinoHeaderWithLargeTitleStackColumn: {
    width: 375,
  },
  day10: {
    top: 0,
    left: 0,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    right: 0,
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
  },
  day10Stack: {
    top: 0,
    left: 0,
    height: 296,
    position: 'absolute',
    right: 2,
  },
  cupertinoButtonSuccess1: {
    top: 205,
    left: 30,
    width: 315,
    height: 72,
    position: 'absolute',
  },
  todaysTask: {
    top: 44,
    left: 0,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    right: 2,
    bottom: 218,
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
  },
  day102: {
    top: 81,
    left: 0,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    right: 2,
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
  },
  completed: {
    top: 127,
    left: 2,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    right: 0,
    bottom: 133,
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
  },
  yes: {
    top: 163,
    left: 0,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    right: 2,
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
  },
  day10StackStack: {
    top: 260,
    left: 0,
    position: 'absolute',
    right: -2,
    bottom: 256,
  },
  challengeProgress: {
    top: 227,
    left: 2,
    color: 'rgba(232,173,120,1)',
    position: 'absolute',
    right: -2,
    bottom: 552,
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
  },
  cupertinoHeaderWithLargeTitleStackColumnFiller: {
    flex: 1,
  },
});

export default ChallengeStatus;