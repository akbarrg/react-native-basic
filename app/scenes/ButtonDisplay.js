import React, {Component} from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'

//set action if button pressed
const onPressed = () => {
		alert('Button pressed!');
	};
	
export default class ButtonDisplay extends Component {
	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>
				Button</Text>
				<View>
					<Text style={styles.text}>
					This is a center button</Text>
					<View style={{alignItems: 'center'}}>
						<Button
							onPress={onPressed}
							title= "Press me!"
							color= 'red' />
					</View>
				</View>
				<View>
					<Text style={styles.text}>
					This is a match parent button</Text>
					<View>
						<Button
							onPress={onPressed}
							title= "Press me!"
							color= 'red' />
					</View>
				</View>
			</View>	
		)
	}
} 

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 50,
	},

	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 30
	}
})