import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
} from 'native-base';
import useStore from '../../state/state';

function ListSchedule({navigation}) {
  const state = useStore(state => state);

  return (
    <>
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Text>Day 1</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task1Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 2</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task2Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 3</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task3Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 4</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task4Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 5</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task5Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 6</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task6Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 7</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task7Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 8</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task8Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 9</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task9Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 10</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task10Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 11</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task11Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 12</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task12Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 13</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task13Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 14</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task14Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 15</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task15Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 16</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task16Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 17</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task17Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 18</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task18Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 19</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task19Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 20</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task20Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 21</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task21Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 22</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task22Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 23</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task23Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 24</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task24Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 25</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task25Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 26</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task26Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 27</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task27Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 28</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task28Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 29</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task29Name}</Text>
              </Right>
            </CardItem>
            <View
              style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 0.7,
              }}
            />
            <CardItem>
              <Text>Day 30</Text>
              <Right>
                <Text>{state.userCurrentChallenge.task30Name}</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </>
  );
}

export default ListSchedule;
