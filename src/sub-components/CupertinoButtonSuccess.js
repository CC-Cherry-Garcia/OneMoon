import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function CupertinoButtonSuccess(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>{props.text1 || 'Button'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(229,80,57,1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 5,
  },
  caption: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Roboto-Medium',
  },
});

export default CupertinoButtonSuccess;
