import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {
    createStackNavigator,
  } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import Files from './Files.js';
import Mangle from './Mangle.js';
import Results from './Results.js';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Files: Files,
    Mangle: Mangle,
    Results: Results,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}


