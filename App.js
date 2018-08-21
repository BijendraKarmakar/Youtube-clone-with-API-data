import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Navbar from './app/Components/Navbar';
import Topbar from './app/Components/Topbar';
import Body from './app/Components/Body';

import data from './app/Components/search.json';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <ScrollView>
          <Body video={data.items[0]} />
          <Body video={data.items[1]} />
          <Body video={data.items[2]} />
          <Body video={data.items[3]} />
          <Body video={data.items[4]} />
        </ScrollView>
        <Topbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
