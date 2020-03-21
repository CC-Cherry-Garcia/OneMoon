/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  View,
  H1,
  H3,
  Text,
  Button,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Body,
} from 'native-base';
import useStore from '../../state/state';

function HomeUserActiveChallenge({navigation, route}) {
  const state = useStore(state => state);

  return (
    <Container>
      <Content>
        <H1 style={styles.H1}>Welcome back, {route.params.userName}!</H1>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
        />
        <H3 style={styles.H3}>Current Challenges:</H3>

        {state.userActiveChallengesList.map(item => (
          <ListItem
            style={{
              marginRight: 20,
              backgroundColor: 'rgba(24, 61, 95, 0.03)',
            }}
            key={item.id}
            onPress={() => {
              state.setUserCurrentChallenge(item);
              navigation.navigate('Home', {
                screen: 'ChallengeStatusMain',
              });
            }}>
            {(item.groupId != undefined && (
              <Icon active style={styles.people} name="people" />
            )) || <Icon active style={styles.people} name="trophy" />}

            <Body>
              <Text style={styles.Text}>
                <Text style={styles.Text}>
                  {item.challenge.title}
                  {'\n'}
                  <Text style={styles.startDate}>
                    Started: {new Date(item.startDate).getFullYear()}/
                    {new Date(item.startDate).getMonth() + 1}/
                    {new Date(item.startDate).getDate()}
                  </Text>
                </Text>
              </Text>
            </Body>
            {console.log('item: ', item)}
            <Right>
              <Icon active style={styles.checkmark} name="checkmark-circle" />
              {/* <Icon active name="arrow-forward" /> */}
            </Right>
          </ListItem>
        ))}
        <View style={styles.container}>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('Create', {
                screen: 'ChallengeTop',
              });
            }}>
            <Text>Create a New Challenge</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  H3: {
    margin: 20,
  },
  H1: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  Text: {
    fontSize: 18,
  },

  startDate: {
    color: 'gray',
  },

  checkmark: {
    color: 'green',
    // marginLeft: 200,
  },

  people: {
    color: 'rgba(24, 61, 95, 1)',
    marginLeft: 10,
    // marginLeft: 200,
  },
  button: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeUserActiveChallenge;
