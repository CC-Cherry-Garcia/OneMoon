import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../variablesColors';

function Splash(props) {
  return (
    <View style={styles.container}>
      <Icon name="md-moon" style={styles.icon} />
      <Text style={styles.loremIpsum}>30 DAYS</Text>
      <Text style={styles.toA}>TO A</Text>
      <Text style={styles.better3}>BETTER</Text>
      <Text style={styles.you}>YOU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  icon: {
    color: 'rgba(130,204,221,1)',
    fontSize: 200,
    marginTop: 189,
    alignSelf: 'center',
  },
  loremIpsum: {
    color: 'rgba(248,194,145,1)',
    fontSize: 50,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 30,
  },
  toA: {
    color: 'rgba(248,194,145,1)',
    fontSize: 30,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 13,
  },
  better3: {
    color: 'rgba(248,194,145,1)',
    fontSize: 50,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 1,
  },
  you: {
    color: 'rgba(248,194,145,1)',
    fontSize: 50,
    fontFamily: 'ArchivoBlack-Regular',
    textAlign: 'center',
    marginTop: 7,
  },
});

export default Splash;
