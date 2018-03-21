import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Routes from './src/Routes';


export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar
          backgroundColor="#64dd17"
          barStyle="light-content"
        />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#2ec120",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
