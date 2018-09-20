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
        {key: 'Mangler.py', difficulty: 'Hard'},
        {key: 'Handler.py', difficulty: 'Easy'},
        {key: 'exe1.py', difficulty: 'Moderate'},
        {key: 'testflight.py', difficulty: 'Hard'},
        {key: 'tree.py', difficulty: 'Hard'},
        {key: 'graphdb.py', difficulty: 'Hard'},
        {key: 'awesome.py', difficulty: 'Hard'},
        {key: 'assignment0.py', difficulty: 'Easy'},
        {key: 'codemangler.py', difficulty: 'Moderate'},
        {key: 'LeftRightOccurences.py', difficulty: 'Moderate'},
        {key: 'Tax.py', difficulty: 'Hard'},
        {key: 'CardShuffle.py', difficulty: 'Easy'}
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
                <View style={styles.row}>
                  <Text style={styles.title} 
                    onPress={() => Press()}>{item.key}
                  </Text>
                  <Text style={styles.difficulty}>{item.difficulty}</Text>
                </View>
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
    row:{
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 47,
      paddingBottom: 25,
      paddingLeft: 16,
      justifyContent: 'space-between',
    },
    difficulty:{
      color: '#939393',
      fontFamily: 'Arial',
      fontSize: 16,
      marginRight: 16,
    },
    title: {
        color: '#002D67',
        fontFamily: 'Arial',
        fontSize: 16,
        textAlign: 'left',
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
