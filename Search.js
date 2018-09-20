import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window')

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
}



  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
    const filteredfiles = this.props.files.filter(
      file => {
      return (file.key.toLowerCase().indexOf(event.nativeEvent.text.toLowerCase()) !== -1);
      }
    );
    this.props.filterfiles(filteredfiles);
  }

  render() {
    return (
      <View style={styles.searchbox}>
        <View style={styles.row}>
          <TextInput 
            type='text'
            placeholder='Search...' 
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            style={styles.text}
          />
          <Image style={styles.pic} source={require('./assets/search.png')}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  searchbox:{
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F5F5F5',
    borderRadius: 3,
    marginHorizontal: 16,
    height: 48,
    justifyContent: 'center',
  },
  row:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    fontSize: 14,
    fontFamily: 'Arial',
    color: '#002D67',
    paddingLeft: 16,
    width: width - 66,
  },
  pic:{
    width: 16,
    height: 16,
    marginLeft: 2,
  }
});


export default Search;
