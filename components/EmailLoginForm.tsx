import React, {useState, useReducer} from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
import {Auth} from 'aws-amplify';

const initialFormState = {
  username: '',
  password: '',
  email: '',
  confirmationCode: '',
};

function reducer(state: any, action: {type: string}) {
  switch (action.type) {
    case 'updateFormState':
      return {
        ...state,
        [action.id]: action.e.nativeEvent.text,
      };
    default:
      return state;
  }
}

async function signUp({username, password, email}, updateFormType) {
  try {
    console.log('sign up try!', username, password, email, updateFormType);
    await Auth.signUp({
      username,
      password,
      attributes: {email},
    });
    console.log('sign up success!');
    updateFormType('confirmSignUp');
  } catch (err) {
    console.log('error signing up..', err);
    Alert.alert(
      'Error',
      err,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }
}

async function confirmSignUp({username, confirmationCode}, updateFormType) {
  try {
    console.log('try confirm sign up :', username, confirmationCode);
    await Auth.confirmSignUp(username, confirmationCode);
    console.log('confirm sign up success!');
    updateFormType('signIn');
  } catch (err) {
    console.log('error signing up..', err);
    Alert.alert(
      'Error',
      err,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }
}

async function signIn({username, password}) {
  try {
    console.log('try sign in :', username, password);
    const result = await Auth.signIn(username, password);
    console.log('sign in success!', result);
  } catch (err) {
    console.log('error signing up..', err);
    Alert.alert(
      'Error',
      err,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }
}

export default function EmailLoginForm() {
  const [formType, updateFormType] = useState('signUp');
  const [formState, updateFormState] = useReducer(reducer, initialFormState);
  function renderForm() {
    switch (formType) {
      case 'signUp':
        return (
          <SignUp
            signUp={() => {
              signUp(formState, updateFormType);
            }}
            updateFormState={(id, e) =>
              updateFormState({type: 'updateFormState', id, e})
            }
          />
        );
      case 'confirmSignUp':
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={(id, e) =>
              updateFormState({type: 'updateFormState', id, e})
            }
          />
        );
      case 'signIn':
        return (
          <SignIn
            signIn={() => signIn(formState)}
            updateFormState={(id, e) =>
              updateFormState({type: 'updateFormState', id, e})
            }
          />
        );
      default:
        return null;
    }
  }

  return (
    <View>
      <View>{renderForm(formState)}</View>
      {formType === 'signUp' && (
        <Text style={styles.footer}>
          Already have an account?{' '}
          <Text style={styles.anchor} onPress={() => updateFormType('signIn')}>
            Sign In
          </Text>
        </Text>
      )}
      {formType === 'signIn' && (
        <Text style={styles.footer}>
          Need an account?{' '}
          <Text style={styles.anchor} onPress={() => updateFormType('signUp')}>
            Sign Up
          </Text>
        </Text>
      )}
    </View>
  );
}

function SignUp(props) {
  return (
    <View style={styles.container}>
      <TextInput
        name="username"
        onChange={e => {
          e.persist();
          props.updateFormState('username', e);
        }}
        style={styles.input}
        placeholder="username"
      />
      <TextInput
        type="password"
        name="password"
        onChange={e => {
          e.persist();
          props.updateFormState('password', e);
        }}
        style={styles.input}
        placeholder="password"
      />
      <TextInput
        name="email"
        onChange={e => {
          e.persist();
          props.updateFormState('email', e);
        }}
        style={styles.input}
        placeholder="email"
      />
      <Button title="Sign Up" onPress={props.signUp} style={styles.button} />
    </View>
  );
}

function SignIn(props) {
  return (
    <View style={styles.container}>
      <TextInput
        name="username"
        onChange={e => {
          e.persist();
          props.updateFormState('username', e);
        }}
        style={styles.Input}
        placeholder="username"
      />
      <TextInput
        type="password"
        name="password"
        onChange={e => {
          e.persist();
          props.updateFormState('password', e);
        }}
        style={styles.input}
        placeholder="password"
      />
      <Button title="Sign In" style={styles.button} onPress={props.signIn} />
    </View>
  );
}

function ConfirmSignUp(props) {
  return (
    <View style={styles.container}>
      <TextInput
        name="confirmationCode"
        placeholder="Confirmation Code"
        onChange={e => {
          e.persist();
          props.updateFormState('confirmationCode', e);
        }}
        style={styles.input}
      />
      <Button
        title="Confirm Sign Up"
        onPress={props.confirmSignUp}
        style={styles.button}
      />
    </View>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    marginTop: 8,
    width: 300,
    maxWidth: 300,
    fontSize: 16,
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid rgba(0, 0, 0, .3)',
  },
  button: {
    backgroundColor: '#006bfc',
    color: 'white',
    width: 316,
    height: 45,
    marginTop: 10,
    fontWeight: '600',
    fontSize: 14,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    borderRadius: 3,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
  },
  footer: {
    fontWeight: '600',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  anchor: {
    color: '#006bfc',
    cursor: 'pointer',
  },
};
