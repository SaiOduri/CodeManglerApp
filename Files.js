import React from 'react';
import {
    StackNavigator,
  } from 'react-navigation';
import Search from './Search.js';
import { Alert, Button, StyleSheet, FlatList, Text, View } from 'react-native';



class Files extends React.Component {
  constructor () {
    super();
    this.state = {
      files: [
        {key: 'File 1', name: 'File 1'},
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
      ],
      filteredfiles: null,
    };
  }

  filterfiles = (filteredfiles) => {
    this.setState({
      filteredfiles
    });
  }

    static navigationOptions = {
      title: 'Files',
    };

    onLoginPressed(){
    alert("Login Successful");
    }

    render() {

      const file = this.state.filteredfiles ?
        this.state.filteredfiles : this.state.files;

      function Press(){
        navigate('Mangle', { name: 'Mangle' });
      }

      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container} >
          <Search
            filterfiles={this.filterfiles}
            files={this.state.files}
          />
          <FlatList
              data={file}
              renderItem={({item}) =>
                <Text style={styles.title} 
                  onPress={() => Press()}>{item.key}
                </Text>}
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
        flexWrap: 'wrap',
    },
    title: {
        color: '#a4c3b2',
        fontSize: 30,
        borderWidth: 1,
        textAlign: 'left',
        padding: 10,
    },
});

export default Files
