import React from 'react';
import {StyleSheet, Share} from 'react-native';
import {Container, Content, H1, Text, Button, View} from 'native-base';
import useStore from '../../state/state';
import Colors from '../../variablesColors';

function FormGroup05SharingInformation({navigation, route}, props) {
  const state = useStore(state => state);

  async function onShare() {
    try {
      const result = await Share.share({
        message: `I just started ${state.challengeInput.title} Challenge! Join me on One Moon with this code: ${state.challengeInput.groupId} #30DayChallenge`,
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
        <H1>Invite more group members!</H1>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
          }}
        />
        <Text style={styles.textDefault}>
          Share your Group Challenge ID so that your friends can join you.
        </Text>
        <Text style={styles.textDefault}>
          <Text style={{fontWeight: 'bold'}}>Title:</Text>{' '}
          {state.challengeInput.title}
        </Text>
        <Text style={styles.textDefault}>
          <Text style={{fontWeight: 'bold'}}>Challenge Group name:</Text>{' '}
          {state.challengeInput.groupName}
        </Text>
        <Text style={styles.textDefault}>
          <Text style={{fontWeight: 'bold'}}>Start Date:</Text>{' '}
          {`${new Date(
            state.challengeInput.startDate,
          ).getFullYear()}/${new Date(
            state.challengeInput.startDate,
          ).getMonth() + 1}/${new Date(
            state.challengeInput.startDate,
          ).getDate()}`}
        </Text>

        <View>
          <Text style={styles.textDefault}>
            <Text style={{fontWeight: 'bold'}}>Group Challenge ID:</Text>{' '}
            {state.challengeInput.groupId}
          </Text>
          {/* <Fab style={{backgroundColor: '#5067FF'}} position="bottomRight">
            <Icon name="share" onPress={() => onShare()} />
          </Fab> */}
        </View>
        <Button
          title="Share Group ID"
          onPress={() => onShare()}
          style={styles.btn}>
          <Text>Share Group ID</Text>
        </Button>
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
    fontSize: 18,
  },
  textDefault: {
    marginTop: 20,
    fontSize: 18,
  },
  textInputDefault: {
    margin: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: Colors.primary,
  },
});

export default FormGroup05SharingInformation;
