import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import CupertinoRadio from './CupertinoRadio';

function ChallengeType(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() =>
          console.log('Navigate to FirstTimeChallengeTypeQuantity')
        }
        style={styles.button}>
        <Text style={styles.quantityChallenge}>
          {props.text2 || 'Quantity Challenge'}
        </Text>
        <View style={styles.cupertinoRadioRow}>
          <CupertinoRadio style={styles.cupertinoRadio} />
          <Text style={styles.loremIpsum6}>
            {props.text1 ||
              'Pick this if you want to increase the amount of times you do something. For example: 5 more squats everyday.'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 315,
    height: 150,
    backgroundColor: 'rgba(248,194,145,1)',
  },
  quantityChallenge: {
    color: 'rgba(60,99,130,1)',
    fontSize: 20,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 14,
    marginLeft: 62,
  },
  cupertinoRadio: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(60,99,130,1)',
    marginTop: 14,
  },
  loremIpsum6: {
    width: 240,
    height: 96,
    color: 'rgba(60,99,130,1)',
    fontSize: 20,
    fontFamily: 'ArchivoBlack-Regular',
    marginLeft: 16,
  },
  cupertinoRadioRow: {
    height: 96,
    flexDirection: 'row',
    marginTop: 7,
    marginLeft: 6,
    marginRight: 13,
  },
});

export default ChallengeType;
