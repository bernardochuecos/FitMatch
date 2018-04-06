import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	FlatList
} from 'react-native';

export default class Main extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
 					data={[{key: 'a'}, {key: 'b'}]}
  					renderItem={({item}) => <Text>{item.key}</Text>}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#A1D3F8'
	}
})