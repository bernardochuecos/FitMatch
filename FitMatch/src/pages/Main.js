import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	TouchableOpacity
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
			<View style={styles.component}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Image style={styles.image}
						source={{ uri: item.image }} />
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={styles.text}>
						{item.book_title}
					</Text>
					<Text style={{ fontSize: 16, color: 'black'}}>
						{item.author}
					</Text>
				</View>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
       				<TouchableOpacity
         				style={styles.button}>
         				<Text> Yes </Text>
       				</TouchableOpacity>
       				<TouchableOpacity
         				style={styles.buttonMiddle}>
         				<Text> Maybe </Text>
       				</TouchableOpacity>
       				<TouchableOpacity
         				style={styles.button}>
         				<Text> No </Text>
       				</TouchableOpacity>
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
		backgroundColor:'#A1D3F8'
	},
	component: { 
		flexDirection: 'column',
		marginTop: 30, 
		marginBottom: 30, 
		backgroundColor:'#b9def9'
	},
	image: {
		marginTop: 30,
		width: 280, 
		height: 280
	},
	text: { 
		fontSize: 18, 
		color: 'black',
		marginTop: 40, 
		marginBottom: 15
	},
	button: {
		backgroundColor: '#DDDDDD', 
		padding: 10,
		marginTop: 50,
		marginLeft: 20,
		marginRight: 20
	},
	buttonMiddle: {
		backgroundColor: '#DDDDDD', 
		padding: 10,
		marginTop: 90,
		marginBottom: 25,
		marginLeft: 20,
		marginRight: 20
	}
})