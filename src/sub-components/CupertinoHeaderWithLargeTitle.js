import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function CupertinoHeaderWithLargeTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.header}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon name="ios-arrow-back" style={styles.leftIcon2} />
            <Text style={styles.leftText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.rightText}>Action</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          One Moon
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(248,194,145,1)',
    paddingRight: 8,
    paddingLeft: 8,
  },
  header: {
    width: 359,
    height: 44,
    flexDirection: 'row',
  },
  leftWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  leftIconButton: {
    flexDirection: 'row',
  },
  leftIcon2: {
    color: 'rgba(10,61,98,1)',
    fontSize: 32,
  },
  leftText: {
    color: 'rgba(10,61,98,1)',
    alignSelf: 'center',
    paddingLeft: 5,
    fontSize: 17,
  },
  rightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {},
  rightText: {
    color: 'rgba(10,61,98,1)',
    alignSelf: 'center',
    fontSize: 17,
  },
  textWrapper: {
    height: 52,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
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
