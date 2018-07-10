import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import {
    createStackNavigator,
  } from 'react-navigation';
import Files from './Files.js';

class ListView extends React.Component {
    constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      };
    }
  
    render() {
      return (
        
      );
    }
  }

  export default ListView

