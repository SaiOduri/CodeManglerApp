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
    SignUp: SignUp,
    Files: Files,
    Mangle: Mangle,
    Results: Results,
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
