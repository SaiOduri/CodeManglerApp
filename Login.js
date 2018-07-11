import React from 'react';
//import { setCustomText } from 'react-native-global-props';
import { StackNavigator, } from 'react-navigation';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';


class Login extends React.Component {
    static navigationOptions = {
        title: 'Log Out',
        header: null
    };

    render() {
    function onLogin(){
        navigate('Files', { name: 'Files' });
    }

    function onSignUp(){
        navigate('SignUp', { name: 'SignUp'});
    }
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
            <Image style={styles.title} source={require('./assets/splash.png')} />

            <View style ={styles.inputContainer}>
                <TextInput style ={styles.inputText}
                  textAlign = 'center'
                  underlineColorAndroid='transparent'
                  placeholder="Username"
                  placeholderTextColor="#939393"
                  onChangeText={(text) => this.setState({text})}/>
            </View>
            <View style ={styles.inputContainer}>
                <TextInput style ={styles.inputText}
                  textAlign = 'center'
                  underlineColorAndroid='transparent'
                  secureTextEntry={true}
                  password={true}
                  placeholder="Password"
                  placeholderTextColor="#939393"
                  onChangeText={(text) => this.setState({text})}/>
              </View>
            <TouchableHighlight
              onPress={() => onLogin()}
              style={(styles.loginContainer)}
              color="#002D67">
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableHighlight>
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>{"Don't have an account?"}</Text>
              <TouchableHighlight
                onPress={() => onSignUp()}
                style = {styles.signUpBtnArea}>
                <Text style={styles.signUpBtn}>SIGN UP</Text>
              </TouchableHighlight>
            </View>
      </View>
      );
    }
  }

const styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#FEFEFE',
      flexWrap: 'nowrap',
    },
    inputContainer: {
      width: 296,
      marginBottom: 40,
      borderBottomColor:"#F5F5F5",
      borderBottomWidth:1,
    },
    loginContainer: {
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 3,
      backgroundColor: '#002D67',
      width: 296,
      height: 48,
      marginTop: 10,
    },
    loginText:{
      justifyContent:'center',
      fontWeight: 'bold',
      color:'#FEFEFE',
      padding:17,
      fontSize:13,
    },
    title:{
      marginTop:77,
      marginBottom:65,
      width: 261,
      height: 127,
    },
    inputText:{
      height:17,
      fontSize: 16,
      marginBottom: 16,
    },
    signUpText:{
      fontSize: 16,
      color:'#939393',
    },
    signUpBtn:{
      fontSize: 16,
      color:'#002D67',
      fontWeight: 'bold',
    },
    signUpContainer:{
      flex: 1,
      alignItems:'center',
      flexDirection:'row',
    },
    signUpBtnArea:{
      paddingLeft:5,
    },
});

export default Login
