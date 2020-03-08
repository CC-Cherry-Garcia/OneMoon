import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import CupertinoHeaderWithLargeTitle from '../src/components/CupertinoHeaderWithLargeTitle';
import CupertinoButtonSuccess from '../src/components/CupertinoButtonSuccess';

function Login(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithLargeTitle
        style={styles.cupertinoHeaderWithLargeTitle}
      />
      <TextInput placeholder=" Email" style={styles.email} />
      <Text style={styles.createAnAccount}>Create an Account</Text>
      <Text style={styles.loremIpsum}>
        Please make an account to track your progress.
      </Text>
      <TextInput
        placeholder=" Password"
        maxLength={20}
        style={styles.textInput}
      />
      <CupertinoButtonSuccess
        text1="Create Account"
        style={styles.cupertinoButtonSuccess}
      />
      <CupertinoButtonSuccess
        text1="Sign In"
        style={styles.cupertinoButtonSuccess2}
      />
      <View style={styles.rect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(60,99,130,1)',
  },
  cupertinoHeaderWithLargeTitle: {
    width: 375,
    height: 96,
  },
  email: {
    width: 315,
    height: 57,
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    marginTop: 346,
    marginLeft: 30,
  },
  createAnAccount: {
    color: 'rgba(248,194,145,1)',
    fontSize: 30,
    fontFamily: 'ArchivoBlack-Regular',
    marginTop: -190,
    marginLeft: 30,
  },
  loremIpsum: {
    color: 'rgba(232,173,120,1)',
    fontSize: 24,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'left',
    marginTop: 16,
    marginLeft: 30,
  },
  textInput: {
    width: 315,
    height: 57,
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#121212',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    marginTop: 118,
    marginLeft: 30,
  },
  cupertinoButtonSuccess: {
    width: 315,
    height: 72,
    marginTop: 31,
    marginLeft: 30,
  },
  cupertinoButtonSuccess2: {
    width: 315,
    height: 72,
    marginTop: -522,
    marginLeft: 30,
  },
  rect: {
    height: 7,
    backgroundColor: 'rgba(130,204,221,1)',
    marginTop: 39,
  },
});

export default Login;
