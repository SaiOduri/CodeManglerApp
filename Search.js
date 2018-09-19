import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';


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
      <TextInput 
        type='text'
        placeholder='Search...' 
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}
      />
    );
  }
}

export default Search;
