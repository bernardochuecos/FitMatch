import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends React.Component<{}> {
	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type = "Login" />
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account?</Text>
					<Text style={styles.signupButton}> Sign up.</Text>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#2ec120",
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