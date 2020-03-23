// import React, {useState, useReducer} from 'react';
// import {TextInput, Alert} from 'react-native';
// import {Text, Button, Icon, View, H1} from 'native-base';
// import {Auth} from 'aws-amplify';
// import LocalPushNotificationSetting from '../LocalPushNotificationSetting';

// const initialFormState = {
//   username: '',
//   password: '',
//   email: '',
//   confirmationCode: '',
// };
// let passwordEmpty = true;
// let usernameEmpty = true;

// function reducer(state: any, action: {type: string}) {
//   switch (action.type) {
//     case 'updateFormState':
//       return {
//         ...state,
//         [action.id]: action.e.nativeEvent.text,
//       };
//     default:
//       return state;
//   }
// }

// async function signUp({username, password, email}, updateFormType) {
//   try {
//     console.log('sign up try!', username, email, updateFormType);
//     await Auth.signUp({
//       username,
//       password,
//       attributes: {email},
//     });
//     console.log('sign up success!');
//     updateFormType('confirmSignUp');
//   } catch (err) {
//     console.log('error signing up..', err);
//     Alert.alert(
//       'Error',
//       err.message,
//       [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//       {cancelable: false},
//     );
//   }
// }

// async function confirmSignUp({username, confirmationCode}, updateFormType) {
//   try {
//     console.log('try confirm sign up :', username, confirmationCode);
//     await Auth.confirmSignUp(username, confirmationCode);
//     console.log('confirm sign up success!');
//     updateFormType('signIn');
//   } catch (err) {
//     console.log('error signing up..', err);
//     Alert.alert(
//       'Error',
//       err.message,
//       [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//       {cancelable: false},
//     );
//   }
// }

// async function signIn({username, password}) {
//   try {
//     console.log('try sign in :', username);
//     const result = await Auth.signIn(username, password);
//     console.log('sign in success!', result);
//     LocalPushNotificationSetting.confirm();
//   } catch (err) {
//     console.log('error signing in..', err);
//     Alert.alert(
//       'Error',
//       err.message,
//       [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//       {cancelable: false},
//     );
//   }
// }

// export default function EmailLoginForm() {
//   const [formType, updateFormType] = useState('signIn');
//   const [formState, updateFormState] = useReducer(reducer, initialFormState);
//   function renderForm() {
//     switch (formType) {
//       case 'signUp':
//         return (
//           <SignUp
//             signUp={() => {
//               signUp(formState, updateFormType);
//             }}
//             updateFormState={(id, e) =>
//               updateFormState({type: 'updateFormState', id, e})
//             }
//           />
//         );
//       case 'confirmSignUp':
//         return (
//           <ConfirmSignUp
//             confirmSignUp={() => confirmSignUp(formState, updateFormType)}
//             updateFormState={(id, e) =>
//               updateFormState({type: 'updateFormState', id, e})
//             }
//           />
//         );
//       case 'signIn':
//         return (
//           <SignIn
//             signIn={() => signIn(formState)}
//             updateFormState={(id, e) =>
//               updateFormState({type: 'updateFormState', id, e})
//             }
//           />
//         );
//       default:
//         return null;
//     }
//   }

//   return (
//     <View>
//       <View>{renderForm(formState)}</View>
//       {formType === 'signUp' && (
//         <Text style={styles.footer}>
//           Already have an account?{' '}
//           <Text style={styles.anchor} onPress={() => updateFormType('signIn')}>
//             Sign In
//           </Text>
//         </Text>
//       )}
//       {formType === 'signIn' && (
//         <Text style={styles.footer}>
//           Need an account?{' '}
//           <Text style={styles.anchor} onPress={() => updateFormType('signUp')}>
//             Sign Up
//           </Text>
//         </Text>
//       )}
//     </View>
//   );
// }

// function SignUp(props) {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         name="username"
//         onChange={e => {
//           e.persist();
//           props.updateFormState('username', e);
//         }}
//         style={styles.input}
//         placeholder="username"
//         autoCapitalize="none"
//         autoCorrect={false}
//         returnKeyType="next"
//         onSubmitEditing={() => this.secondInput.focus()}
//       />
//       <TextInput
//         ref={ref => {
//           this.secondInput = ref;
//         }}
//         type="password"
//         name="password"
//         onChange={e => {
//           e.persist();
//           props.updateFormState('password', e);
//         }}
//         style={styles.input}
//         placeholder="password"
//         secureTextEntry={true}
//         returnKeyType="go"
//         onSubmitEditing={props.signIn}
//       />
//       <TextInput
//         name="email"
//         onChange={e => {
//           e.persist();
//           props.updateFormState('email', e);
//         }}
//         style={styles.input}
//         placeholder="email"
//       />
//       <Button title="Sign Up" onPress={props.signUp} style={styles.button} />
//     </View>
//   );
// }

// function SignIn(props) {
//   return (
//     <View style={styles.container}>
//       <H1>Login</H1>
//       <TextInput
//         name="username"
//         onChange={e => {
//           console.log(e.nativeEvent.text);
//           e.persist();
//           props.updateFormState('username', e);
//           if (e.nativeEvent.text.length > 0) {
//             usernameEmpty = false;
//           } else {
//             usernameEmpty = true;
//           }
//         }}
//         style={styles.input}
//         placeholder="username"
//         autoCapitalize="none"
//         autoCorrect={false}
//         returnKeyType="next"
//         onSubmitEditing={() => this.secondInput.focus()}
//       />
//       <TextInput
//         ref={ref => {
//           this.secondInput = ref;
//         }}
//         type="password"
//         name="password"
//         onChange={e => {
//           e.persist();
//           props.updateFormState('password', e);
//           if (e.nativeEvent.text) {
//             passwordEmpty = false;
//           } else {
//             passwordEmpty = true;
//           }
//         }}
//         style={styles.input}
//         placeholder="password"
//         secureTextEntry={true}
//         autoCapitalize="none"
//         autoCorrect={false}
//         returnKeyType="go"
//         onSubmitEditing={props.signIn}
//       />
//       <Button
//         disabled={passwordEmpty || usernameEmpty}
//         title="Sign In"
//         style={
//           passwordEmpty || usernameEmpty ? styles.buttonDisabled : styles.button
//         }
//         onPress={props.signIn}>
//         <Text style={styles.buttonText}>Log in</Text>
//       </Button>
//     </View>
//   );
// }

// function ConfirmSignUp(props) {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         name="confirmationCode"
//         placeholder="Confirmation Code"
//         onChange={e => {
//           e.persist();
//           props.updateFormState('confirmationCode', e);
//         }}
//         style={styles.input}
//       />
//       <Button
//         title="Confirm Sign Up"
//         onPress={props.confirmSignUp}
//         style={styles.button}
//       />
//     </View>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginTop: 150,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 45,
//     marginTop: 8,
//     width: 300,
//     maxWidth: 300,
//     fontSize: 16,
//   },
//   button: {
//     width: 300,
//     backgroundColor: 'rgba(24, 61, 95, 1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonDisabled: {
//     width: 300,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   footer: {
//     fontWeight: '600',
//     textAlign: 'center',
//     color: 'rgba(0, 0, 0, 0.6)',
//   },
//   anchor: {
//     color: '#006bfc',
//   },
// };
