import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './src/pages/Login';

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar
          backgroundColor="#64dd17"
          barStyle="light-content"
        />
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#b2ff59",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});