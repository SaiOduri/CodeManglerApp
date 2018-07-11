import React from 'react';
import {
    StackNavigator,
  } from 'react-navigation';
import { Alert, Button, StyleSheet, FlatList, Text, View } from 'react-native';

class Results extends React.Component {
    static navigationOptions = {
        title: 'Results',
    };

    render() {
      const { navigate } = this.props.navigation;

      return (
        <View style={styles.container}>
            <Text style={styles.title}> 
                Results
            </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        color: '#a4c3b2',
        fontSize: 30,
        textAlign: 'center',
    },
  }
);

  export default Results
