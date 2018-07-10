import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {
    createStackNavigator,
  } from 'react-navigation';
import HomeScreen from './HomeScreen.js';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

export default class App extends React.Component {

  render() {
    return (
      <RootStack />
    );
  }
}


