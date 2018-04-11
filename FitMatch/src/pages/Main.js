import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	FlatList,
	Image
} from 'react-native';

export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			dataSource: []
		}
	}

	renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}>
				<Image style={{ width: 80, height: 80, margin: 5 }}
					source={{ uri: item.image }} />
				<View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
					<Text style={{ fontSize: 18, color: 'green', marginBottom: 15}}>
						{item.book_title}
					</Text>
					<Text style={{ fontSize: 16, color: 'red'}}>
						{item.author}
					</Text>
				</View>
			</View>
		)
	}

	renderSeparator = () => {
		return (
			<View
				style={{ height: 1, width: '100%', backgroundColor: 'black'}}>
			</View>
			)
	}

	componentDidMount() {
		const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'

		fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				dataSource: responseJson.book_array
			})
		})
		.catch((error) => {
			console.log(error)
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
 					data={this.state.dataSource}
  					renderItem={this.renderItem}
  					keyExtractor={(item, index) => index}
  					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#A1D3F8',
	}
});