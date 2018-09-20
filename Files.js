import React from 'react';
import {
    StackNavigator,
  } from 'react-navigation';
import Search from './Search.js';
import { Alert, Button, StyleSheet, FlatList, Text, View, Dimensions } from 'react-native';


const {height, width} = Dimensions.get('window')

class Files extends React.Component {
  constructor () {
    super();
    this.state = {
      files: [
        {key: 'Mangler.py'},
        {key: 'Handler.py'},
        {key: 'exe1.py'},
        {key: 'testflight.py'},
        {key: 'tree.py'},
        {key: 'graphdb.py'},
        {key: 'awesome.py'},
        {key: 'assignment0.py'},
        {key: 'codemangler.py'},
        {key: 'LeftRightOccurences.py'},
        {key: 'Tax.py'},
        {key: 'CardShuffle.py'}
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
        <View style={styles.container}>
          <Search
            filterfiles={this.filterfiles}
            files={this.state.files}
          />
          <FlatList
              data={file}
              style={styles.separater}
              renderItem={({item}) =>
              <View style={styles.card}>
                <Text style={styles.title} 
                  onPress={() => Press()}>{item.key}
                </Text>
                <View style={styles.rectangle}/> 
              </View>}
          />
        </View>
      );
    }
  }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    card:{

    },
    title: {
        color: '#002D67',
        fontFamily: 'Arial',
        fontSize: 16,
        textAlign: 'left',
        paddingTop: 47,
        paddingBottom: 25,
        paddingLeft: 16,
    },
    separater:{
      marginTop: -4.5,
    },
    rectangle:{
      width: width - 16,
      backgroundColor: '#F5F5F5',
      height: 1,
      marginLeft: 16,
    },
});

export default Files
