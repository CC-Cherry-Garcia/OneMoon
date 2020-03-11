import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import CupertinoHeaderWithLargeTitle from '../src/sub-components/CupertinoHeaderWithLargeTitle';
import Icon from 'react-native-vector-icons/FontAwesome';
import CupertinoButtonSuccess from '../src/sub-components/CupertinoButtonSuccess';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

function FirstTime(props) {
  console.log('props in FirstTime.tsx: ', props);
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
        Design your first 30-day challenge in less than 5 minutes and get
        started achieving your goals.
      </Text>
      <View style={styles.group2}>
        <Text style={styles.loremIpsum4}>Pick a Challenge start date:</Text>
        <TextInput
          onChangeText={TextInputValue =>
            props.setChallengeInput({
              ...props.challengeInput,
              startDate: TextInputValue,
            })
          }
          placeholder=" Date Picker"
          style={styles.email1}
        />
      </View>
      <Button
        title=" Next Step"
        color="#f194ff"
        onPress={() => props.changeView()}
      />
      <View style={styles.rect1} />
      <View style={styles.group3}>
        <Text style={styles.challengeName}>Challenge Name:</Text>
        <TextInput
          onChangeText={TextInputValue =>
            props.setChallengeInput({
              ...props.challengeInput,
              title: TextInputValue,
            })
          }
          placeholder=" Crushing Squats"
          style={styles.textInput}
        />
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
    // width: 400,
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
  group2: {
    width: 315,
    height: 96,
    marginTop: 187,
    alignSelf: 'center',
  },
  loremIpsum4: {
    width: 292,
    height: 29,
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
  },
  email1: {
    width: 315,
    height: 57,
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    marginTop: 11,
  },
  cupertinoButtonSuccess1: {
    width: 315,
    height: 72,
    marginTop: 24,
    marginLeft: 30,
  },
  rect1: {
    height: 7,
    // backgroundColor: 'rgba(130,204,221,1)',
    marginTop: -353,
  },
  group3: {
    width: 315,
    height: 96,
    marginTop: 33,
    marginLeft: 30,
  },
  challengeName: {
    width: 292,
    height: 29,
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    marginTop: 15,
  },
  textInput: {
    width: 315,
    height: 57,
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    marginTop: 11,
  },
});

export default FirstTime;
