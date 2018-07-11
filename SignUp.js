import React from 'react';
//import { setCustomText } from 'react-native-global-props';
import { StackNavigator, } from 'react-navigation';
import { Button, Image, StyleSheet, Text, TextInput, TouchableHighlight,TouchableOpacity, View } from 'react-native';


class SignUp extends React.Component {
    static navigationOptions = {
        title: 'Sign Up',
        header: null
    };

    render() {

    function onLogin(){
        navigate('Files', { name: 'Files' });
    }
    function onBackPressed(){
         //this.props.navigation.goBack(null);
     }
      const { navigate } = this.props.navigation;
      return (
        <View style = {styles.container}>
          <View style= {styles.topBar}>
            <TouchableOpacity
              onPress={() => onBackPressed()}
              style = {(styles.exit)}
              >
            <Image style={styles.exit} source={require('./assets/exit.png')}/>
            </TouchableOpacity>
            </View>
        <View style = {styles.mainBody}>
            <View style ={styles.firstInputContainer}>
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
              <View style ={styles.inputContainer}>
                  <TextInput style ={styles.inputText}
                    textAlign = 'center'
                    underlineColorAndroid='transparent'
                    secureTextEntry={true}
                    password={true}
                    placeholder="Retype Password"
                    placeholderTextColor="#939393"
                    onChangeText={(text) => this.setState({text})}/>
                </View>
            <TouchableHighlight
              onPress={() => onLogin()}
              style={(styles.signUpContainer)}
              color="#002D67">
              <Text style={styles.signUpText}>CREATE ACCOUNT</Text>
            </TouchableHighlight>
      </View>
      </View>
      );
    }
  }

const styles = StyleSheet.create({

    mainBody: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
    container: {
      backgroundColor: '#FEFEFE',
      flex: 1,
    },
    topBar: {
      margin: 16,
      height: 48,
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
    exit: {
      height: 16,
      width: 16,
    },
    firstInputContainer: {
      marginTop: 147,
      width: 296,
      marginBottom: 40,
      borderBottomColor:"#F5F5F5",
      borderBottomWidth:1,
    },
    inputContainer: {
      width: 296,
      marginBottom: 40,
      borderBottomColor:"#F5F5F5",
      borderBottomWidth:1,
    },
    signUpContainer: {
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 3,
      backgroundColor: '#002D67',
      width: 296,
      height: 48,
      marginTop: 10,
    },
    signUpText:{
      justifyContent:'center',
      fontWeight: 'bold',
      color:'#FEFEFE',
      padding:17,
      fontSize:13,
    },
    inputText:{
      height:17,
      fontSize: 16,
      marginBottom: 16,
    },
});

export default SignUp
