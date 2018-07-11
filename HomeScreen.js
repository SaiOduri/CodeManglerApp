import React from 'react';
import {
    StackNavigator,
  } from 'react-navigation';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Log Out',
        header: null
    };


    onLoginPressed(){
        navigate('Files', { name: 'Files' })
        alert("Login Successful")
        }
    onRegisterPressed(){
        alert("User Signed up!")
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Image style={(styles.logo)} source={require('./assets/logo.png')} />
        <Text style={styles.title}>Code{'\n'}Mangler</Text>

        </View>
        <TextInput
          placeholder="Username"
          onChangeText={(text) => this.setState({text})}/>

        <View style={styles.btnContainer}>
        <Button
            onPress={this.onRegisterPressed}
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
    logo:{
      width: 73,
      height: 73,
    },
    titleContainer: {
      flex:1,
      flexDirection:'row',
      marginTop:96,
    },
    title: {
      flex: 1,
      color: '#002D67',
      fontSize: 43,
      fontWeight: 'bold',
    },
    inputContainer: {
      padding: 10,
      fontSize: 16,
    },
    btnContainer: {
        margin: 20,
    },
});

export default HomeScreen
