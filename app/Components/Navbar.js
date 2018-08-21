/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons' ;

 class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image
            style={styles.img}
            source={require('../images/youtube.png')}
            />

          <View style={styles.moveright}>
            <TouchableOpacity>
            <Icon name="search" size={26} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon name="account-circle" size={26} style={styles.icons} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  navbar: {
    marginTop: 25,
    height: 50,
    backgroundColor: '#fff',
    elevation: 3,

    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    marginRight: 30,
    width: 120,
    height: 23,
  },
  moveright: {
    flexDirection: 'row',
  },
  icons: {
    padding: 4,
    marginLeft: 15,
  },
});

export default Navbar;
