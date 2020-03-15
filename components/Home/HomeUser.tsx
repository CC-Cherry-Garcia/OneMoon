import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Alert} from 'react-native';
import {
  Container,
  Header,
  Content,
  H1,
  H2,
  H3,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button,
  DatePicker,
} from 'native-base';
import {Auth} from 'aws-amplify';
import useStore from '../../state/state';

function Home(props) {
  const state = useStore(state => state);

  return (
    <Container style={styles.Container}>
      <Content>
        <H1>Home - User w/o Active Challenge</H1>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    marginTop: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Home;
