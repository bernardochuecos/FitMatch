import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';

import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {
	
  signup() {
      Actions.signup()
  }

  render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<LoginForm type ="Login" />
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Sign up.</Text></TouchableOpacity>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#A1D3F8",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont : {
  	flexGrow: 1,
  	alignItems: 'flex-end',
  	justifyContent: 'flex-end',
  	paddingVertical: 16,
  	flexDirection: 'row'
  },
  signupText: {
  	color: 'rgba(255, 255, 255, 0.7)',
  	fontSize: 16,
  	fontWeight: '500'
  },
  signupButton: {
  	color: '#ffffff',
  	fontSize: 16,
  	fontWeight: '900'
  }
});