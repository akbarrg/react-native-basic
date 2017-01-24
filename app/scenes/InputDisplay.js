import React, {Component} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default class InputDisplay extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>
				Text Input</Text>
				<Text style={styles.text}>
				Name</Text>
				<TextInput
				style={styles.input}
				placeholder= "Normal TextInput" />
				<Text style={styles.text}>
				Phone number (cannot be edited)</Text>
				<TextInput
				style={styles.input}
				value= "082243631929"
				editable= {false} />
				<Text style={styles.text}>
				Address</Text>
				<TextInput
				style={styles.input}
				placeholder= "Multiline text input"
				multiline= {true} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10
	},

	title: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 30,
		color: 'red'
	},

	text: {
		fontSize: 20,
		marginLeft: 10,
	},

	input: {
		fontSize: 20,
		marginBottom: 50,
		marginLeft: 10,
		color: 'black'
	}
})
