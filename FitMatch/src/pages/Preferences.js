import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, SectionList, Picker, Image, Item, TextInput} from 'react-native';

import SignupLogo from '../components/SignupLogo';
import SignupForm from '../components/SignupForm';

import {Actions} from 'react-native-router-flux';

export default class Preferences extends React.Component<{}> {
  constructor(){
    super();
    this.state={
      PickerValue:''
    }
  }

  renderItem = ({ item, index, section }) => {
    return (
      <View style={styles.options}>
        <Text style={styles.text}>{item}</Text>
        <View style={styles.optionContainer}>
          <Picker
            selectedValue={this.state.PickerValue}
            style={{ height: 50, width: 150 , color: 'white'}}>
            <Picker.Item label="Choose..." value="option" />
          </Picker>
        </View>
      </View>
    )
  }

	render() {
		return(
			<View style={styles.container}>
        <SectionList
          sections={ [ {title: 'Preferences', data: ['Age:', 'Experience level:', 'How long do you run for?',
                                                    'Gender preference:', 'Are you training for any local runs?', 
                                                    'Preferred conversation level?']} ] }
          renderItem={this.renderItem}
          renderSectionHeader={
            ({section}) => <View style={styles.header}>
              <Image style={{width: 60, height: 60, marginRight: 20}}
                source={require('../images/FitMatchLogo.png')}/>
                <Text style={{color: 'white', fontSize: 25}}> User preferences </Text>
            </View>
          }
            renderSectionFooter={
              ({section}) => <View style={styles.footer}>
                <TouchableOpacity>
                          <Text style={styles.text}>Done</Text>
                </TouchableOpacity>
              </View>
          }
          stickySectionHeadersEnabled={true}
        />
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#80bdff",
    flex: 1
  },
  container : {
    backgroundColor: "#80bdff",
    flex: 1
  },
  optionContainer : {
    backgroundColor: "#99caff",
    flex: 1,
    marginLeft: 30,
    marginBottom: 15,
    width: 150
  },
  text: {
    marginLeft: 10,
  	color: 'white',
  	fontSize: 20
  },
  doneButton: {
  	fontSize: 16,
  	fontWeight: '900'
  },
  header: { 
    flex: 1, 
    backgroundColor: '#003e80', 
    height: 80, 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  footer: { 
    flex: 1, 
    backgroundColor: '#003e80', 
    height: 50, 
    marginLeft: 30,
    width: '80%',
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  inputBox: {
    width:300,
    height:50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 25
  }
});