/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

 class Body extends Component {
  render() {
    let video = this.props.video;
    return (
      <View style={styles.container}>
        <Image source={{uri: video.snippet.thumbnails.medium.url}}
          style={{height: 200, borderRadius: 5}}/>
        <View style={styles.textcontainer}>
          <Image source={{uri: video.snippet.thumbnails.default.url}}
            style={styles.profilepic}/>
          <View style={styles.innercontainer}>
            <Text style={styles.innertext}>{video.snippet.title}</Text>
            <Text style={styles.videostats}>{video.snippet.channelTitle} - 100k Views </Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#000',
  },
  textcontainer: {
    marginLeft: 10,
    paddingRight: 5,
    flexDirection: 'row',
  },
  innertext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 4,
  },
  profilepic: {
    marginTop: 15,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'white',

  },
  innercontainer: {
    marginLeft: 20,
    padding: 5,
    marginTop: 12,
  },
  videostats: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  }
});

export default Body;
