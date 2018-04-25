import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	FlatList,
	SectionList,
	Image,
	TouchableOpacity
} from 'react-native';

export default class Main extends Component {
	constructor() {
		super()
	}

	renderItem = ({ item }) => {
		return (
			<View style={styles.component}>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Image style={styles.image}
						source={{ uri: item[3]}} />
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={styles.text}>
						{item[4]}, {item[1]}
					</Text
					>
					<Text style={{ fontSize: 22, color: 'black'}}>
						{item[2]}
					</Text>
					<Text style={{ fontSize: 22, color: 'black'}}>
						{item[7]} match
					</Text>
				</View>
				<View style={styles.buttonContainer}>
       				<TouchableOpacity
         				style={styles.button}>
         				<Image style={{width: 80, height: 80}}
						source={require('../images/yesButton.png')} />
       				</TouchableOpacity>
       				<TouchableOpacity
         				style={styles.buttonMiddle}>
         				<Image style={{width: 80, height: 80}}
						source={require('../images/maybeButton.png')} />
       				</TouchableOpacity>
       				<TouchableOpacity
         				style={styles.button}>
         				<Image style={{width: 80, height: 80}}
						source={require('../images/noButton.png')} />
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

	render() {
		return (
			<View style={styles.container}>
				<SectionList
 					sections={ [ {title: 'FitMatch', data: [[0,37,"male","http://randomuser.me/api/portraits/men/71.jpg","Angelique","Harmon","Eu irure pariatur aute pariatur cillum deserunt veniam.","97%"],
			[1,32,"female","http://randomuser.me/api/portraits/women/2.jpg","Ally","Phillips","Nisi sunt Lorem ex aliqua Lorem minim ut anim cupidatat id aliqua veniam.","94%"],
			[2,20,"male","http://randomuser.me/api/portraits/men/7.jpg","Apollo","Jarvis","Duis sunt elit magna ipsum veniam culpa occaecat magna.","91%"],
			[3,31,"male","http://randomuser.me/api/portraits/men/15.jpg","Jones","Slater","Voluptate aliqua magna anim velit officia fugiat pariatur sunt mollit adipisicing aliqua nostrud sint cillum.","88%"],
			[4,40,"male","http://randomuser.me/api/portraits/men/92.jpg","Dionne","Castillo","Adipisicing qui consequat cupidatat reprehenderit aliquip laboris.","85%"],
			[5,33,"male","http://randomuser.me/api/portraits/men/11.jpg","Smith","Benjamin","Amet aliqua pariatur consequat nulla quis eu sint magna et ullamco duis exercitation.","82%"],
			[6,19,"male","http://randomuser.me/api/portraits/men/41.jpg","Daniel","Waller","Lorem exercitation incididunt aliquip ex ad voluptate ut consequat tempor nostrud.","79%"],
			[7,37,"male","http://randomuser.me/api/portraits/men/66.jpg","Rivers","Meadows","Sunt excepteur duis enim exercitation amet sit.","76%"],
			[8,34,"male","http://randomuser.me/api/portraits/men/70.jpg","Myrna","Cotton","Non incididunt voluptate sint laboris qui non officia sunt anim dolore minim.","73%"],
			[9,29,"female","http://randomuser.me/api/portraits/women/3.jpg","Alta","Peterson","Irure aliquip fugiat irure eu cupidatat pariatur cillum eu occaecat nisi duis culpa.","70%"]]} ] }
 					//{this.state.dataSource}
  					renderItem={this.renderItem}
  					renderSectionHeader={
  						({section}) => <View style={styles.header}>
											<TouchableOpacity>
												<Image style={{marginRight: 80, width: 60, height: 60}}
          											source={require('../images/profilePicture.png')}/>
          									</TouchableOpacity>
											<Image style={{width: 70, height: 70}}
          										source={require('../images/FitMatchLogo.png')}/>
          									<TouchableOpacity>
          										<Image style={{marginLeft: 80, width: 50, height: 50}}
          											source={require('../images/settings.png')}/>
          									</TouchableOpacity>
										</View>
  					}
  					keyExtractor={(item, index) => index}
  					ItemSeparatorComponent={this.renderSeparator}
  					stickySectionHeadersEnabled={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#e6f2ff'
	},
	component: { 
		flexDirection: 'column',
		marginTop: 30, 
		marginBottom: 30,
		marginLeft: 30,
		marginRight: 30,
		backgroundColor:'#b3d7ff'
	},
	image: {
		marginTop: 20,
		marginLeft: 30,
		marginRight: 30,
		width: 260, 
		height: 260
	},
	text: { 
		fontSize: 28, 
		fontWeight: 'bold',
		color: 'black',
		marginTop: 20
	},
	buttonContainer: {
		flex: 1, 
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center'
	},
	button: {
		backgroundColor: 'rgba(52, 52, 52, 0.0)', 
		padding: 10,
		marginLeft: 5,
		marginRight: 5
	},
	buttonMiddle: {
		backgroundColor: 'rgba(52, 52, 52, 0.0)', 
		padding: 10,
		marginTop: 40,
		marginLeft: 5,
		marginRight: 5
	},
	header: { 
		flex: 1, 
		backgroundColor: '#80bdff', 
		height: 80, 
		justifyContent: 'center', 
		alignItems: 'center', 
		flexDirection: 'row'
	}
})