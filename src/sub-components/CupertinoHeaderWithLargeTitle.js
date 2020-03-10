import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function CupertinoHeaderWithLargeTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>One Moon</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(248,194,145,1)',
  },
  textWrapper: {
    height: 135,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'rgba(10,61,98,1)',
    fontSize: 34,
    fontFamily: 'Roboto-Regular',
    lineHeight: 40,
    textAlign: 'center',
  },
});

export default CupertinoHeaderWithLargeTitle;
