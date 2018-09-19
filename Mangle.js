import React from 'react'

import {
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native'

import CollapseView from "./Components/CollapseView";

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  box: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  panel: {
    flex: 1,
    position: 'relative'
  },
  row2:{
    display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop:10,
  },
  collapseView: {
    height:200,
  },
  iconView: {
    flexDirection: 'row',
    backgroundColor:'#ffffff',
    alignItems: 'center',
    height: 52,
  },
  arrow:{
    width: 9.4,
    height: 6.1,
    marginRight: 5.6,
  },
  description:{
    fontFamily: 'Arial',
    color: '#4B4B4B',
    fontSize: 14,
    paddingRight: 47,
    backgroundColor: '#FFFFFF',
  },
}

export default class Mangle extends React.Component {
 
  constructor(props) {
    super(props)
  }
  
  _renderIconView = (collapse, name) => {
    return(
      <View style={styles.iconView}>
        <View>
          {
            collapse?
            <Image style={styles.arrow} source={require('./assets/up_toggle.png')}/>:
            <Image style={styles.arrow} source={require('./assets/down_toggle.png')}/>
          }
        </View>
        <Text style={styles.locations}>{name}</Text>
      </View>
    )
  }
  
  _renderCollapseView = (collapse) => {
    return(
      <View style={styles.collapseView}>
        <Text style={styles.description}>
            Words beginning with a vowel, have ’way’ put on the end (’one’ becomes ’oneway’) {'\n'}{'\n'} Words with no vowels, have ’ay’ put on the end (’xkcd’ becomes ’xkcday’){'\n'}{'\n'} All other words have all of the letters before the first vowel moved to the end, and ’ay’ put on the end (’brian’ becomes ’ianbray’){'\n'}{'\n'} The code only works with lower case letters
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
            <View style={styles.row2}>
              <CollapseView 
                  renderView={this._renderIconView}
                  renderCollapseView={this._renderCollapseView}
                  name={''}
                />
            </View>
            <View style={styles.box}>
                <Text>
                    Test
                </Text>
            </View>
          </View>
    )
  }
}
