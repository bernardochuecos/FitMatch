import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';

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
    backgroundColor: "#2ec120",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
