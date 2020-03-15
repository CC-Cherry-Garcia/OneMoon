import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Table, TableWrapper, Cell} from 'react-native-table-component';
import {
  Container,
  Content,
  H1,
  H3,
  Text,
  Button,
  Card,
  CardItem,
  Left,
  Right,
} from 'native-base';
import useStore from '../../state/state';

function ChallengeStatusMain(props) {
  const state = useStore(state => state);

  const tableData = [
    ['1', '2', '3', '4', '5', '6'],
    ['7', '8', '9', '10', '11', '12'],
    ['13', '14', '15', '16', '17', '18'],
    ['19', '20', '21', '22', '23', '24'],
    ['25', '26', '27', '28', '29', '30'],
  ];

  const completedDates = [
    ['1', '1', '1', '0', '0', '1'],
    ['1', '0', '0', '0', '0', '0'],
    ['1', '1', '1', '1', '0', '0'],
    ['1', '1', '1', '0', '1', '1'],
    ['1', '1', '1', '0', '0', '0'],
  ];

  let completedCount = 0;
  for (const row of completedDates) {
    for (const col of row) {
      if (col === '1') {
        ++completedCount;
      }
    }
  }
  let progress = Math.ceil((completedCount / 30) * 100);

  console.log('props in ChallengeStatusMain.tsx: ', props);
  console.log('state in ChallengeStatusMain.tsx: ', state);

  return (
    <>
      <Container style={styles.container}>
        <Content>
          <H1>{state.userCurrentChallenge.title}</H1>
          <Card style={{marginTop: 30}}>
            <CardItem header>
              <H3>Day ? : task name</H3>
            </CardItem>
            <CardItem>
              <Left>
                <Button success>
                  <Text> Complete </Text>
                </Button>
              </Left>
              <Right>
                <Button bordered dark>
                  <Text> Not yet </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card style={{marginTop: 15}}>
            <CardItem style={{flex: 1}}>
              <H3 style={{alignSelf: 'center'}}>{progress} %</H3>
            </CardItem>
            <CardItem>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: progress,
                    flexDirection: 'row',
                    height: 20,
                    backgroundColor: '#5cb85c',
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                />
                <View
                  style={{
                    flex: 100 - progress,
                    flexDirection: 'row',
                    height: 20,
                    backgroundColor: 'lightgrey',
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
              </View>
            </CardItem>
          </Card>
          <Card style={{marginTop: 15, marginBottom: 20, padding: 10}}>
            <Table borderStyle={{flex: 1, borderColor: 'transparent'}}>
              {tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={cellData}
                      style={
                        completedDates[index][cellIndex] === '1'
                          ? {backgroundColor: '#5cb85c', width: 53}
                          : {backgroundColor: 'transparent', width: 53}
                      }
                      textStyle={styles.text}
                    />
                  ))}
                </TableWrapper>
              ))}
            </Table>
          </Card>

          <Button block onPress={() => props.changeView()}>
            <Text>VIEW SCHEDULE</Text>
          </Button>
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  text: {margin: 6, textAlign: 'center'},
  row: {flexDirection: 'row', backgroundColor: '#FFF1C1', height: 40},
});

export default ChallengeStatusMain;
