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
  Col,
  Row,
  Grid,
} from 'native-base';
import useStore from '../../state/state';
import Colors from '../../variablesColors';

function FormGroup02ChallengeType({navigation}, props) {
  const state = useStore(state => state);

  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1 style={styles.H1}>Choose your Challenge Type</H1>
        <Card>
          <CardItem
            onPress={() => navigation.navigate('GroupChallengeQuantityInfo')}>
            <Grid style={styles.Grid}>
              <Col style={{width: 50}}>
                <Icon
                  // active
                  // style={styles.QuantIcon}
                  name="apps"
                  style={styles.Icon}
                  onPress={() =>
                    navigation.navigate('GroupChallengeQuantityInfo')
                  }
                />
              </Col>
              <Col>
                <Text
                  style={styles.CardTitle}
                  onPress={() =>
                    navigation.navigate('GroupChallengeQuantityInfo')
                  }>
                  Quantity Challenge
                </Text>
                <Text
                  onPress={() =>
                    navigation.navigate('GroupChallengeQuantityInfo')
                  }>
                  Pick this if you want to increase the amount of times you do
                  something. For example: 5 more squats everyday.
                </Text>
              </Col>
            </Grid>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            onPress={() => navigation.navigate('GroupChallengeTimeInfo')}>
            <Grid style={styles.Grid}>
              <Col style={{width: 50}}>
                <Icon
                  // active
                  // style={styles.QuantIcon}
                  name="md-time"
                  style={styles.Icon}
                  onPress={() => navigation.navigate('GroupChallengeTimeInfo')}
                />
              </Col>
              <Col>
                <Text
                  style={styles.CardTitle}
                  onPress={() => navigation.navigate('GroupChallengeTimeInfo')}>
                  Time Challenge
                </Text>
                <Text
                  onPress={() => navigation.navigate('GroupChallengeTimeInfo')}>
                  Pick this if you want to increase the duration you do
                  something. For example: Read for 10 minutes longer everyday.
                </Text>
              </Col>
            </Grid>
          </CardItem>
        </Card>
        <Card>
          <CardItem
            onPress={() => navigation.navigate('GroupChallengeRepeatInfo')}>
            <Grid style={styles.Grid}>
              <Col style={{width: 50}}>
                <Icon
                  // active
                  // style={styles.QuantIcon}
                  name="refresh"
                  style={styles.Icon}
                  onPress={() =>
                    navigation.navigate('GroupChallengeRepeatInfo')
                  }
                />
              </Col>
              <Col>
                <Text
                  style={styles.CardTitle}
                  onPress={() =>
                    navigation.navigate('GroupChallengeRepeatInfo')
                  }>
                  Same Daily Goal Challenge
                </Text>
                <Text
                  onPress={() =>
                    navigation.navigate('GroupChallengeRepeatInfo')
                  }>
                  Pick this if you want to increase the duration you do
                  something. For example: Read for 10 minutes longer everyday.
                </Text>
              </Col>
            </Grid>
          </CardItem>
        </Card>

        <Card>
          <CardItem
            header
            button
            onPress={() => navigation.navigate('GroupChallengeLibrary')}>
            <Text style={{paddingLeft: 120}}>Search Challenge</Text>
          </CardItem>
          <CardItem
            button
            onPress={() => navigation.navigate('GroupChallengeLibrary')}>
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
    // position: 'absolute',
    color: 'rgba(24, 61, 95, 0.4)',
    // marginLeft: 10,
    // paddingTop: 75,
    // fontSize: 100,
    // width: 120,
    // height: 250,
    // lineHeight: 120,
    marginBottom: 20,
    // marginLeft: 200,
  },
  Grid: {
    // padding: 20,
  },
  CardTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  Icon: {
    color: Colors.primary,
    fontSize: 50,
    width: 50,
  },
});

export default FormGroup02ChallengeType;
