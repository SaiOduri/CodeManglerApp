import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,} from 'react-navigation';
import Login from './Login.js';
import Files from './Files.js';
import Mangle from './Mangle.js';
import Results from './Results.js';
import SignUp from './SignUp.js';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Files: Files,
    Mangle: Mangle,
    Results: Results,
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: null,
        headerStyle: { backgroundColor: '#FEFEFE' },
        headerTintColor: '#fff'
      }
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}
