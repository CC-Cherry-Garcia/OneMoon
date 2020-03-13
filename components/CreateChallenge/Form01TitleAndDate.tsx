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

function Form01TitleAndDate(props) {
  console.log('props in Form01TitleAndDate.tsx: ', props);
  return (
    <Container style={styles.Container}>
      <Content>
        <H1>Create your Challenge!</H1>
        <Text>
          Design your first 30-day challenge in less than 5 minutes and get
          started achieving your goals.
        </Text>
        <Form>
          <Label style={styles.Title}>Challenge Title</Label>
          <Item>
            <Input placeholder="Squat Til You Drop" />
          </Item>
          <Label style={styles.Title}>Start Date</Label>
          <Item fixedLabel last>
            <DatePicker
              defaultDate={new Date(2020, 2, 4)}
              minimumDate={new Date(2020, 2, 12)}
              maximumDate={new Date(2021, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{color: '#0a3d62'}}
              placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={this.setDate}
              disabled={false}
            />
          </Item>
          <Button block onPress={() => props.changeView()}>
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

export default Form01TitleAndDate;
