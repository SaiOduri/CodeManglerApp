import React from 'react';
import {
    createStackNavigator,
  } from 'react-navigation';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';


class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };

    onLoginPressed(){
        alert("Login Successful")
        }
    onRegisterPressed(){
        alert("Registration Begin")
    }
    
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
        <Text style={styles.title}>Code Mangler</Text>
        <View style={styles.btnContainer}>
          <Button
            onPress={this.onLoginPressed}
            title="Login"/>
            <Button
              onPress={this.onRegisterPressed}
              title="Register"/>
            </View>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#a4c3b2',
        fontSize: 48,
    },
    btnContainer: {
        margin: 20,
    },
});

export default createStackNavigator({
    Home: {
        screen: HomeScreen
    },
});