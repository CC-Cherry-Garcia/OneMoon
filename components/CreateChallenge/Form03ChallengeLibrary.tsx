import React, {Component, useEffect, useState, useRef} from 'react';
import {StyleSheet, TextInput, Alert} from 'react-native';
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
  Card,
  CardItem,
  Right,
  Body,
  View,
  StatusBar,
  FlatList,
  List,
  ListItem,
  Spinner,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../src/graphql/queries';
import useStore from '../../state/state';

function Form03ChallengeLibrary({navigation, route}, props) {
  const state = useStore(state => state);
  const [loading, setLoading] = useState(true);
  const [allChallengeList, setAllChallengeList] = useState([]);
  const [filteredChallengeList, setFilteredChallengeList] = useState([]);

  //To get group challenge data
  useEffect(() => {
    state.setChallengeType('library');
    const getAllChallenges = async () => {
      const result = await API.graphql(
        graphqlOperation(queries.listChallenges, {
          limit: 1000, //Just in case
        }),
      );
      setAllChallengeList(result.data.listChallenges.items);
      setFilteredChallengeList(result.data.listChallenges.items);
      setLoading(false);
      console.log('allChallengeList :', allChallengeList);
    };
    getAllChallenges();
  }, []);

  const filterChallengeList = word => {
    const updateList = allChallengeList.filter(challenge => {
      return challenge.title.toLowerCase().search(word.toLowerCase()) !== -1;
    });
    setFilteredChallengeList(updateList);
  };

  if (loading) {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  } else {
    return (
      <Container style={styles.Container}>
        <Content padder>
          <Text>
            Search challenge that you want to do and get started achieving your
            goals.
          </Text>
          <Form>
            <Label style={styles.Title}>Challenge library</Label>
            <Item>
              <Input
                placeholder="Search"
                onChangeText={value => filterChallengeList(value)}
              />
            </Item>
            {filteredChallengeList.map(item => (
              <ListItem
                style={{
                  marginRight: 20,
                  backgroundColor: 'rgba(24, 61, 95, 0.03)',
                }}
                key={item.id}
                onPress={() => {
                  state.setChallengeInput({
                    ...state.challengeInput,
                    taskName: item,
                    title: item.title,
                  });
                  navigation.navigate('ChallengeConfirmation');
                }}>
                <Body>
                  <Text style={styles.Text}>
                    <Text style={styles.Text}>
                      {item.title}
                      {'\n'}
                    </Text>
                  </Text>
                </Body>
              </ListItem>
            ))}
          </Form>
        </Content>
      </Container>
    );
  }
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
  textDefault: {
    marginTop: 20,
  },
  textInputDefault: {
    margin: 10,
  },
  btn: {
    marginTop: 20,
  },
});

export default Form03ChallengeLibrary;
