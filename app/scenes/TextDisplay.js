import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class TextDisplay extends Component {
	render() {
		return(
			<View style={styles.container}>
			<Text style={styles.title}>
			Text Style
			</Text>
				<View style={{flex: 1, justifyContent: 'space-between'}}>
					<Text style={styles.underline}>
					Underline text and align left
					</Text>
					<Text style={styles.italic}>
					Italic text and align center
					</Text>
					<Text style={styles.bold}>
					Bold text and align right
					</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'skyblue'
	},

	title: {
		fontSize: 30,
		fontWeight: 'bold',		
		textAlign: 'center',
		color: 'red',
		margin: 50
	},

	underline: {
		fontSize: 20,
		textAlign: 'left',
		margin:10,
		textDecorationLine: 'underline'
	},

	italic: {
		fontSize: 20,
		fontStyle: 'italic',
		textAlign: 'center',
		margin:10
	},

	bold: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'right',
		margin:10,
	}
})