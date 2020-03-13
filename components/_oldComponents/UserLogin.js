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

function UserLogin(props) {
  console.log('props in UserLogin.tsx: ', props);
  return (
    <Container style={styles.Container}>
      <Content>
        <View>
          <View style={styles.container}>
            {/* <Button
              title="Sign in with Facebook"
              onPress={() => {
                console.log('Auth :', Auth);
                Auth.federatedSignIn({provider: 'Facebook'});
              }}
            />
            <Button
              title="Sign in with Google"
              onPress={async () => {
                const result = await Auth.federatedSignIn({
                  provider: 'Google',
                });
                console.log(
                  'get aws Auth.federatedSignI google credentials',
                  result,
                );
              }}
            /> */}
            <Button
              title="Sign in with Email"
              onPress={() => props.updateFormState('email')}
            />
          </View>
        </View>
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

export default UserLogin;
