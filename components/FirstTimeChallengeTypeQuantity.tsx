import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, TextInput} from 'react-native';
import CupertinoHeaderWithLargeTitle from '../src/components/CupertinoHeaderWithLargeTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import CupertinoButtonSuccess from '../src/components/CupertinoButtonSuccess';

function FirstTimeChallengeTypeQuantity(props) {
  return (
    <View style={styles.container}>
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
        Pick the task you want to complete every day and how many times you want
        it to increase.
      </Text>
      <CupertinoButtonSuccess
        text1="Review your Challege"
        style={styles.cupertinoButtonSuccess1}
      />
      <View style={styles.rect1} />
      <Text style={styles.text}>Pick your Challenge Task and Quantity:</Text>
      <StatusBar animated={false} hidden={true} />
      <Text style={styles.dailyTask}>Daily Task:</Text>
      <TextInput placeholder=" Squats" style={styles.email1} />
      <Text style={styles.dailyTask2}>Increase Quantity by:</Text>
      <TextInput placeholder=" 5" style={styles.textInput} />
      <View style={styles.day1Row}>
        <Text style={styles.day1}>Day 1:</Text>
        <Text style={styles.day12}>5 Squats</Text>
      </View>
      <View style={styles.day2StackStack}>
        <View style={styles.day2Stack}>
          <Text style={styles.day2}>Day 2:</Text>
          <Text style={styles.day22}>...</Text>
        </View>
        <Text style={styles.text2}>10 Squats</Text>
      </View>
      <View style={styles.day30Stack}>
        <Text style={styles.day30}>Day 30:</Text>
        <Text style={styles.text3}>150 Squats</Text>
      </View>
      <View style={styles.rect2} />
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

export default FirstTimeChallengeTypeQuantity;
