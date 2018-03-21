import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image style={{width: 80, height: 80}}
          			source={require('../images/FitMatchLogo.png')}/>
				<Text style={styles.logoText}>Welcome. Please log in.</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize: 25,
  	fontWeight: '700',
  	color: 'rgba(255, 255, 255, 0.7)'
  }
});