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
import useStore from '../../state/state';

function FormGroup01TitleAndDateAndGroup({navigation}, props) {
  const state = useStore(state => state);

  return (
    <Container style={styles.Container}>
      <Content>
        <H1>Create your Group Challenge!</H1>
        <Text>
          Design your first 30-day group challenge in less than 5 minutes and
          get started achieving your goals.
        </Text>
        <Form>
          <Label style={styles.Title}>Group Name</Label>
          <Item>
            <Input
              placeholder="Squat Challenge Group"
              onChangeText={TextInputValue =>
                state.setChallengeInput({
                  ...state.challengeInput,
                  groupName: TextInputValue,
                })
              }
            />
          </Item>
          <Label style={styles.Title}>Start Date</Label>
          <Item fixedLabel last>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2020, 0, 1)}
              maximumDate={new Date(2030, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{color: '#0a3d62'}}
              placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={value =>
                state.setChallengeInput({
                  ...state.challengeInput,
                  startDate: value.toString(),
                })
              }
              disabled={false}
            />
          </Item>
          <Button
            block
            onPress={() => navigation.navigate('GroupChallengeType')}>
            <Text>Next Step</Text>
          </Button>
        </Form>
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

export default FormGroup01TitleAndDateAndGroup;
