import React from 'react';
import {
    StackNavigator,
  } from 'react-navigation';
import { Alert, Button, StyleSheet, FlatList, Text, View } from 'react-native';

class Mangle extends React.Component {
    static navigationOptions = {
        title: 'Mangler',
    };

    render() {

        function Press(){
            navigate('Results', { name: 'Results' });
        }

        const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
            <Text style={styles.title}> 
                Mangler
            </Text>
            <Button
                onPress={() => Press()}
                title="Test"
            />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    title: {
        color: '#a4c3b2',
        fontSize: 30,
        textAlign: 'center',
    },

  }
);

  export default Mangle

