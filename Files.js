import React from 'react';
import {
    StackNavigator,
  } from 'react-navigation';
import { Alert, Button, StyleSheet, FlatList, Text, View } from 'react-native';


class Files extends React.Component {
    static navigationOptions = {
      title: 'NavBar',
    };

    onLoginPressed(){
    alert("Login Successful");
    }
    onRegisterPressed(){
        alert("User Signed up!");
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
        <FlatList
          data={[
            {key: 'File 1'},
            {key: 'File 2'},
            {key: 'File 3'},
            {key: 'File 4'},
            {key: 'File 5'},
            {key: 'File 6'},
            {key: 'File 7'},
            {key: 'File 8'},
            {key: 'File 9'},
            {key: 'File 10'},
            {key: 'File 11'},
            {key: 'File 12'}
          ]}
          renderItem={({item}) =><Text style={styles.title} onPress={() => alert(item.key)}>{item.key}</Text>}
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
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        color: '#a4c3b2',
        fontSize: 30,
        borderWidth: 1,
        backgroundColor: '#FDD7E4',
        textAlign: 'left',
    },
    btnContainer: {
        margin: 20,
    },
});

export default Files
