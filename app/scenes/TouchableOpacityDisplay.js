import React, {Component} from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

//set action if touchable opacity pressed
const onPressed = () => {
      alert('This is TouchableOpacity');
   };

export default class TouchableDisplay extends Component {
	render() {
		return(
			<View style = {styles.container}>
   			<Text style={styles.title}>
      			TouchableOpacity</Text>
   			<TouchableOpacity onPress={onPressed}>
	            <Text style = {styles.button}>
	             TouchableOpacity without border
               </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressed}>
               <Text style = {styles.buttonBorder}>
                TouchableOpacity with border
               </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressed}>
               <Text style = {styles.buttonBorderRadius}>
                TouchableOpacity rounded border
               </Text>
            </TouchableOpacity>
   		</View>
		)
	}
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      alignItems: 'center',
   },
   title: {
   	  fontSize: 35,
   	  color: 'green',
   	  textAlign: 'center',
   	  padding: 30
   },
   button: {
   	  fontSize: 20,
      borderColor: 'red',
      margin: 30
   },
   buttonBorder: {
   	  fontSize: 20,
   	  color: 'white',
      borderWidth: 3,
      borderColor: 'red',
      backgroundColor: 'blue',
      padding: 10,
      margin: 30
   },
   buttonBorderRadius: {
   	  fontSize: 20,
   	  color: 'white',
      borderWidth: 3,
      backgroundColor: 'blue',
      borderColor: 'red',
      borderRadius: 50,
      padding: 15,
      margin: 30
   },
})
