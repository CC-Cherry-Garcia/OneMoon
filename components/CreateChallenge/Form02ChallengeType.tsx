import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  H1,
  Text,
  Card,
  CardItem,
  Body,
  Icon,
} from 'native-base';
import useStore from '../../state/state';

function Form02ChallengeType({navigation}, props) {
  const state = useStore(state => state);

  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1 style={styles.H1}>Choose your Challenge Type</H1>
        <Card>
          <CardItem
            header
            button
            onPress={() => navigation.navigate('ChallengeQuantityInfo')}>
            <Icon
              active
              style={styles.QuantIcon}
              name="arrow-round-forward-outline"
            />
            <Text style={{paddingLeft: 120}}>Quantity Challenge</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => navigation.navigate('ChallengeQuantityInfo')}>
            <Body>
              <Text>
                Pick this if you want to increase the amount of times you do
                something. For example: 5 more squats everyday.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            header
            button
            onPress={() => navigation.navigate('ChallengeTimeInfo')}>
            <Icon active style={styles.QuantIcon} name="md-time" />
            <Text style={{paddingLeft: 120}}>Time Challenge</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => navigation.navigate('ChallengeTimeInfo')}>
            <Body>
              <Text>
                Pick this if you want to increase the duration you do something.
                For example: Read for 10 minutes longer everyday.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            header
            button
            onPress={() => navigation.navigate('ChallengeRepeatInfo')}>
            <Text style={{paddingLeft: 120}}>Same Daily Goal Challenge</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => navigation.navigate('ChallengeRepeatInfo')}>
            <Body>
              <Text>
                Pick this if you want to complete the same goal for 30 days. For
                example: Go for a walk.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            header
            button
            onPress={() => navigation.navigate('ChallengeSearch')}>
            <Text style={{paddingLeft: 120}}>Search Challenge</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => navigation.navigate('ChallengeSearch')}>
            <Body>
              <Text>
                Pick challenge that someone created. Challenge title is
                rewritten by the challenge you selected.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 20,
  },
  Title: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  H1: {
    marginBottom: 20,
  },
  QuantIcon: {
    position: 'absolute',
    color: 'rgba(24, 61, 95, 0.4)',
    marginLeft: 10,
    paddingTop: 20,
    fontSize: 100,
    width: 120,
    height: 120,
    // marginLeft: 200,
  },
});

export default Form02ChallengeType;
