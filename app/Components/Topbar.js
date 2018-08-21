/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons' ;

 class Topbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.tabbar}>
          <Icon name="home" size={25} />
          <Text style={styles.icon} >Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabbar}>
          <Icon name="whatshot" size={25} />
          <Text style={styles.icon} >Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabbar}>
          <Icon name="subscriptions" size={25} />
          <Text style={styles.icon} >Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabbar}>
          <Icon name="add-alert" size={25} />
          <Text style={styles.icon} >Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabbar}>
          <Icon name="folder" size={25} />
          <Text style={styles.icon} >Library</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 2,
    height: 60,
    borderColor: '#e5e5e5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabbar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 1,
    color: 'rgb(50,50,50)',
  },
});

export default Topbar;
