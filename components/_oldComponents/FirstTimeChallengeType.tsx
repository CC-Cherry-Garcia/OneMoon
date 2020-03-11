import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, Alert} from 'react-native';
import ChallengeType from '../../src/sub-components/ChallengeType';
import CupertinoHeaderWithLargeTitle from '../../src/sub-components/CupertinoHeaderWithLargeTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import CupertinoButtonSuccess from '../../src/sub-components/CupertinoButtonSuccess';

function FirstTimeChallengeType(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <ChallengeType
          state={props}
          text1="Pick this if you want to increase the duration you do something. For example: Read for 10 minutes longer everyday."
          text2="Quantitiy Challenge"
          style={styles.challengeType}
        />
        {/* <ChallengeType
          text1="Pick this if you want to increase the duration you do something. For example: Read for 10 minutes longer everyday."
          text2="Time Challenge"
          style={styles.challengeType2}
        />
        <ChallengeType
          text1="Pick this if you want to complete the same goal for 30 days. For example: Go for a walk."
          text2="Daily Goal Challenge"
          style={styles.challengeType3}
        />
        <ChallengeType
          text2="Custom Challenge"
          text1="Pick this to decide custom goals for each of your 30 days. (This takes the longest to set up.)"
          style={styles.challengeType4}
        /> */}
      </View>
      <View style={styles.cupertinoHeaderWithLargeTitleStack}>
        <CupertinoHeaderWithLargeTitle
          style={styles.cupertinoHeaderWithLargeTitle}
        />
        <Icon name="gear" style={styles.icon} />
      </View>
      <Text style={styles.createAnAccount2}>
        Build your {'\n'}First Challenge!
      </Text>
      <Text style={styles.loremIpsum3}>
        Design your first 30-day challenge in less than 5 minutes and get
        started achieving your goals.
      </Text>
      <CupertinoButtonSuccess
        text1=" Next Step"
        style={styles.cupertinoButtonSuccess1}
      />
      <View style={styles.rect1} />
      <Text style={styles.text}>Pick a Challenge type:</Text>
      <StatusBar animated={false} hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(60,99,130,1)',
  },
  group: {
    width: 315,
    height: 685,
    justifyContent: 'space-between',
    marginTop: 409,
    marginLeft: 30,
  },
  challengeType: {
    width: 315,
    height: 150,
  },
  challengeType2: {
    width: 315,
    height: 150,
  },
  challengeType3: {
    width: 315,
    height: 150,
  },
  challengeType4: {
    width: 315,
    height: 150,
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
    marginTop: -1094,
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
    marginTop: 819,
    marginLeft: 30,
  },
  rect1: {
    height: 7,
    backgroundColor: 'rgba(130,204,221,1)',
    marginTop: -865,
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
});

export default FirstTimeChallengeType;
