import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
<<<<<<< HEAD
	FlatList,
	Image,
	ActivityIndicator,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';

export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			dataSource: [],
			isLoading: true
		}
	}

	renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginBottom: 3}}
				onPress={() => ToastAndroid.show(item.book_title, ToastAndroid.SHORT)}>
				<Image style={{ width: 80, height: 80, margin: 5 }}
					source={{ uri: item.image }} />
				<View style={{ flex: 1, justifyContent: 'center', marginLeft: 5 }}>
					<Text style={{ fontSize: 18, color: 'black', marginBottom: 15}}>
						{item.book_title}
					</Text>
					<Text style={{ fontSize: 16, color: 'black'}}>
						{item.author}
					</Text>
				</View>
			</TouchableOpacity>
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
				dataSource: responseJson.book_array,
				isLoading: false
			})
		})
		.catch((error) => {
			console.log(error)
		})
	}

=======
	FlatList
} from 'react-native';

export default class Main extends Component {
>>>>>>> parent of 6765bec... BookFlatList
	render() {
		return (
			this.state.isLoading
			?
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator size="Large" color="#4259f4" animating />
			</View>
			:
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