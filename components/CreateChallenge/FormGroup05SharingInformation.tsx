import React, {Component} from 'react';
import {StyleSheet, TextInput, Share, Alert} from 'react-native';
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
  Body,
  View,
  StatusBar,
  FlatList,
  List,
  Icon,
  Fab,
  ListItem,
} from 'native-base';
import useStore from '../../state/state';

function FormGroup05SharingInformation({navigation, route}, props) {
  // console.log('state in Form04ChallengeConfirmation.tsx: ', state);

  const state = useStore(state => state);

  async function onShare() {
    try {
      const result = await Share.share({
        message: `I just started ${state.challengeInput.title}! Join this challenge with me from this code: ${state.challengeInput.groupId} #30DayChallenge`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <Container style={styles.Container}>
      <Content padder>
        <H1>Congratulation!</H1>
        <Text style={styles.textDefault}>
          Let's share your group challenge information so that your friend join
          it!
        </Text>
        <Text style={styles.textDefault}>
          Title: {state.challengeInput.title}
        </Text>
        <Text style={styles.textDefault}>
          Challenge Group name: {state.challengeInput.groupName}
        </Text>
        <Text style={styles.textDefault}>
          Start Date: {state.challengeInput.startDate}
        </Text>

        <View>
          <Text style={styles.textDefault}>
            Challenge Group id: {state.challengeInput.groupId}
          </Text>
          <Fab style={{backgroundColor: '#5067FF'}} position="bottomRight">
            <Icon name="share" onPress={() => onShare()} />
          </Fab>
        </View>
        <Button
          title="Back to Home"
          onPress={() => {
            navigation.navigate('Home', {screen: 'HomeUser'});
          }}>
          <Text>Back to Home</Text>
        </Button>
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

export default FormGroup05SharingInformation;
